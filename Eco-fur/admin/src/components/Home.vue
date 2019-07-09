<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 sm6 lg3 v-for="(item, key) in tovarGRoup" :key="key">
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{item}}</h3>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn
              :to=" {name: 'GroupItem', params: {group: key, name: item}}"
              flat
              color="orange"
            >Перейти</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import * as fb from "firebase";
export default {
  data() {
    return {
      tovarGRoup: {}
    };
  },
  created() {
    fb.database()
      .ref("tovarGroup")
      .once("value")
      .then(data => {
        this.tovarGRoup = data.val();
      });
  }
};
</script>

