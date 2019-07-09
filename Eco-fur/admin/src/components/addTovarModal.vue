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
                      <v-text-field v-model="title" label="Название" required></v-text-field>
                    </v-flex>

                    <v-flex xs12 md4>
                      <v-text-field v-model="priceNew" label="Цена" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 md4>
                      <v-text-field v-model="priceOld" label="Старая цена(можно оставить пустым)"></v-text-field>
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
              <v-btn color="success" @click="addTovar">Добавит</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import * as fb from "firebase";
import { timeout, Promise } from "q";
import { setTimeout } from "timers";

export default {
  data() {
    return {
      loading: false,
      dialog: false,
      valid: false,
      tovarGroup: this.$route.params.group,

      title: "",
      priceNew: "",
      priceOld: "",
      content: ``,
      filesMas: [],
      imageSrc: []
    };
  },

  methods: {
    clockLoadImg() {
      this.$refs.inputPhoto.click();
    },
    loadImg(e) {
      const files = e.target.files;
      this.filesMas = [];
      this.imageSrc = [];
      for (let i = 0, f; (f = files[i]); i++) {
        console.log(f);

        if (!f.type.match("image/jpeg")) {
          alert("Картинкт должна быть в формате .jpg");
          return;
        }

        this.filesMas.push(f);

        let reader = new FileReader();

        reader.onload = (theFile => {
          return e => {
            //this.imageSrc[i] = e.target.result;

            this.$set(this.imageSrc, i, e.target.result);
          };
        })(f);

        reader.readAsDataURL(f);
      }
    },

    async addTovar() {
      if (this.$refs.form.validate() && this.filesMas != null) {
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
                  if (this.loading == false) {
                    this.title = "";
                    this.priceNew = "";
                    this.priceOld = "";
                    this.content = ``;
                    this.filesMas = null;
                    this.imageSrc = [];
                    this.$emit("reload");
                    this.dialog = false;
                  }
                });
            }
          );
        }
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
</style>

