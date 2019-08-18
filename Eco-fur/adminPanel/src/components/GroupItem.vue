<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <h1>{{name}}</h1>
    </v-layout>
    <v-layout row wrap align-start justify-start fill-height>
      <v-flex xs12 sm6 lg3 v-for="(item, key) in tovarList" :key="key">
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{item.title}}</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn @click="dellTovar(key,item.roads)" flat color="orange">Удалить</v-btn>
            <uppdateTovar @reload="reload" :id="key"></uppdateTovar>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <addTovar @reload="reload"></addTovar>
    </v-layout>
  </v-container>
</template>
<script>
import addTovar from "./addTovarModal";
import uppdateTovar from "./UpdateTovar";
import * as fb from "firebase";
export default {
  props: ["group", "name"],
  data() {
    return {
      tovarList: {}
    };
  },
  components: { addTovar, uppdateTovar },
  created() {
    fb.database()
      .ref("tovari")
      .child(this.group)
      .once("value")
      .then(data => {
        this.tovarList = data.val();
      });
  },
  methods: {
    dellTovar(id, massImg) {
      let storageRef = fb.storage().ref();
      let lenthMas = massImg.length;
      fb.database()
        .ref("tovari")
        .child(this.group)
        .child(id)
        .remove();
      for (let i = 0; i < lenthMas; i++) {
        let desertRef = storageRef.child(`${this.group}/${id}/${i}.jpg`);
        desertRef
          .delete()
          .then(function() {
            console.log("Топчик");

            // File deleted successfully
          })
          .catch(function(error) {
            console.log(error);
            // Uh-oh, an error occurred!
          });
      }
      // Create a reference to the file to delete

      // Delete the file

      this.reload();
    },
    reload() {
      fb.database()
        .ref("tovari")
        .child(this.group)
        .once("value")
        .then(data => {
          this.tovarList = data.val();
        });
    }
  }
};
</script>
