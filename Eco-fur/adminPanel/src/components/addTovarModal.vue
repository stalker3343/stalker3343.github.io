<template>
  <v-dialog width="800px" v-model="dialog">
    <v-btn class="success" slot="activator">Добаввить товар</v-btn>

    <v-card>
      <v-container>
        <v-layout>
          <v-flex xs-12>
            <v-card-title>
              <h1>Добавление товара</h1>
            </v-card-title>
          </v-flex>
        </v-layout>
        <div v-if="loading" class="text-xs-center">
          <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
        </div>
        <v-layout v-else>
          <v-flex xs-12>
            <v-card-text>
              <v-form v-model="valid" ref="form">
                <v-container>
                  <v-layout row wrap>
                    <v-flex xs12 md4>
                      <v-text-field :rules="titleRules" v-model="title" label="Название" required></v-text-field>
                    </v-flex>

                    <v-flex xs12 md4>
                      <v-text-field :rules="priceRules" v-model="priceNew" label="Цена" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 md4>
                      <v-text-field v-model="priceOld" label="Старая цена"></v-text-field>
                      <p class="caption subtitle">Оставить пустым если нет скидки на товар</p>
                    </v-flex>

                    <v-flex xs12 md4>
                      <v-btn @click="clockLoadImg" color="warning">
                        <v-icon left>cloud_upload</v-icon>загрузить картинки
                      </v-btn>
                      <input
                        ref="inputPhoto"
                        style="display: none"
                        type="file"
                        name="photo"
                        id="photo"
                        accept=".jpg"
                        multiple
                        @change="loadImg"
                      />
                      <v-alert v-show="showError" type="error">Загрузите картинки</v-alert>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-form>
              <v-container grid-list-lg>
                <v-layout row wrap align-start justify-start fill-height>
                  <v-flex xs12 md2 v-for="img in imageSrc" :key="img">
                    <img :src="img" alt />
                  </v-flex>
                </v-layout>
              </v-container>
              <h1>Описание</h1>

              <quill-editor ref="myTextEditor" v-model="content"></quill-editor>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="error" @click="dialog = !dialog">ОТменить</v-btn>
              <v-btn color="success" @click="addTovar">Добавить</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import * as fb from "firebase";
import { timeout, Promise, async } from "q";
import { setTimeout } from "timers";
import { throws } from "assert";

import showPreviuImage from "../functions/showPreviuImage";

export default {
  data() {
    return {
      showError: false,
      loading: false,
      dialog: false,
      valid: false,
      tovarGroup: this.$route.params.group,

      titleRules: [v => !!v || "Введите Название товара"],

      priceRules: [v => !!v || "Введите цену товара"],

      title: "",
      priceNew: "",
      priceOld: "",
      content: ``,
      filesMas: [],
      imageSrc: []
    };
  },

  watch: {
    dialog() {
      this.showError = false;
      this.title = "";
      this.priceNew = "";
      this.priceOld = "";
      this.content = "";
      this.filesMas = [];
      this.imageSrc = [];
      this.$emit("reload");
    }
  },

  methods: {
    clockLoadImg() {
      this.$refs.inputPhoto.click();
    },
    loadImg(e) {
      this.showError = false;
      const files = e.target.files;

      try {
        showPreviuImage(e.target.files).then(({ filesMas, imageSrc }) => {
          this.imageSrc = imageSrc;
          this.filesMas = filesMas;
        });
      } catch (error) {
        console.log(error);
      }
    },

    async addTovar() {
      if (this.$refs.form.validate() && this.filesMas.length > 0) {
        this.loading = true;
        let tovar = {
          title: this.title,
          priceNew: this.priceNew,
          priceOld: this.priceOld,
          deskr: this.content
        };

        let imgSrc = [];

        let fbval = await fb
          .database()
          .ref("tovari")
          .child(this.tovarGroup)
          .push(tovar);

        let counter = 0;
        let collImg = this.filesMas.length;
        let tovarGRoupInFunk = this.tovarGroup;
        for (let i = 0; i < this.filesMas.length; i++) {
          let imageExt = this.filesMas[i].name.slice(
            this.filesMas[i].name.indexOf(".")
          );
          const fileData = fb
            .storage()
            .ref(`${this.tovarGroup}/${fbval.key}`)
            .child(`${i}${imageExt}`)
            .put(this.filesMas[i]);

          fileData.on(
            fb.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function(snapshot) {},
            function(error) {},
            () => {
              // Upload completed successfully, now we can get the download URL
              fileData.snapshot.ref
                .getDownloadURL()
                .then(function(downloadURL) {
                  counter++;
                  imgSrc[i] = downloadURL;

                  return new Promise((resolve, regect) => {
                    if (counter == collImg) {
                      resolve();
                    }
                  });
                })
                .then(() => {
                  fb.database()
                    .ref("tovari")
                    .child(tovarGRoupInFunk)
                    .child(fbval.key)
                    .update({ roads: imgSrc });
                  this.loading = false;
                  this.dialog = false;
                });
            }
          );
        }
      } else if (this.filesMas.length <= 0) {
        this.showError = true;
      }
    }
  }
};
</script>
<style  scoped>
img {
  width: 100%;
}
.quill-code {
  border: none;
  height: auto;
}
.quill-code code {
  width: 100%;
  margin: 0;
  padding: 1rem;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0;
  height: 10rem;
  overflow-y: auto;
  resize: vertical;
}
.subtitle {
  margin-top: -10px;
  color: rgb(187, 20, 20);
}
</style>

