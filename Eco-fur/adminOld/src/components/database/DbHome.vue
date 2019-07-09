<template lang="html">
  <div class="container">

    <div class="card__cont">
      <router-link v-for="(item,key) in tovarGroup" :to="{ name: 'DbDetail', params: { root: item['.key'] }}"
        class="card">

        <div class="card-content">
          <p class="title">
            {{item.value}}

          </p>
          <!-- <p class="subtitle">
            Jeff Atwood
          </p> -->

        </div>

      </router-link>
    </div>
  </div>


<!-- 
    <div class="tile is-ancestor" v-for="(i, index) in Math.ceil(DBRoots.length / tilesPerRow)" v-bind:key="index">
      <div class="tile is-parent is-3" v-for="(root, index) in DBRoots.slice((i - 1) * tilesPerRow, i * tilesPerRow)"
        v-bind:key="index">
        <router-link tag="article" class="tile is-child box" :to="{ name: 'DbDetail', params: { root: root.name[0] }}">
          <p class="title">{{ root.name[1] }}</p>
          <div class="content">
            <fieldset v-if="root.props">
              <legend class="has-text-grey-light">props</legend>
              <div class="tags-container">
                <span class="tag" v-for="(prop, index) in root.props" v-bind:key="index">
                  {{ prop }}
                </span>
              </div>
            </fieldset>
            <fieldset v-if="root.stats">
              <legend class="has-text-grey-light">stats</legend>
              <div class="tags-container">
                <span class="tag" v-for="(prop, index) in root.stats" v-bind:key="index">
                  {{ prop.name }}
                </span>
              </div>
            </fieldset>
          </div>
        </router-link>
      </div>
    </div>
  </div> -->
</template>

<script>
import { DBRoots } from "@/../config/firebase";

import firebaseClient, { DEFAULT_QUERY } from "@/clients/firebaseClient";
import firebaseConfig from "@/../config/firebase";

export default {
  name: "DbHome",
  data() {
    return {
      tovarGroup: null,
      DBRoots,
      tilesPerRow: 4
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const params = DEFAULT_QUERY;
      this.tovarGroup = await firebaseClient.database.getDataByRef(
        "tovarGroup",
        params
      );
    }
  }
};
</script>

<style lang="css" scoped>
.card__cont {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.card {
  width: 300px;
}
span.tag {
  margin: 0 5px 3px 0;
}
fieldset {
  border: 1px solid #eee;
  margin-bottom: 10px;
}
legend {
  padding: 0 5px;
}
article {
  cursor: pointer;
}
.tags-container {
  padding: 5px 10px;
}
</style>
