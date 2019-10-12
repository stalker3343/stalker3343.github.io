<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div v-if="taskData.type == 'search' " class="col-12 col-sm-12 col-md-5">
          <label class="form-control-label">
            Search string / keywords
            <span class="require">*</span>
          </label>
          <ValidationProvider
            vid="SearchText"
            ref="provider"
            name="Search text"
            rules="required|max:255"
            v-slot="{ errors }"
          >
            <base-input
              :error="errors[0]"
              @input="inputInSearchTextOrUrl "
              v-model.lazy="taskData.search_query"
              placeholder="Write search text for Google"
            />
          </ValidationProvider>
        </div>
        <div class="col-12 col-sm-6 col-sm-4 col-md-2">
          <base-input class="mb-0 mb-sm-4" label="Country">
            <select v-model="taskData.country" class="form-control">
              <option
                v-for="countrie in countries"
                :key="countrie.code"
                :value="countrie.code"
              >{{countrie.name}}</option>
            </select>
          </base-input>
        </div>
        <div
          class="col-12 col-sm-6 col-md-5 align-items-center d-flex text-muted"
        >Choose location where the visitors are from</div>
      </div>

      <div class="row mb-4">
        <div class="col-12">
          <label class="form-control-label">
            Site URL
            <span class="require">*</span>
          </label>
        </div>
        <div class="col-6">
          <ValidationProvider
            vid="siteUrl"
            ref="provider"
            name="site url"
            v-slot="{ errors }"
            rules="required"
          >
            <base-input
              v-model="taskData.target_url"
              @input="inputInSearchTextOrUrl "
              class="mt-4 mt-sm-0 mb-0"
              :error="errors[0]"
              placeholder="URL the site that needs to be visited"
            />
          </ValidationProvider>
        </div>

        <div v-if="taskData.type == 'search'" class="col">
          <!-- <base-button
                  class="h-100"
                  :disabled="!canCheckUrl"
                  @click="checkUrl"
                  v-html="textInButtonCheckUrl"
                  :type="searchPosition.googleExist.type || 'info'"
                  :loading="searchPosition.checkUrlLoader"
          ></base-button>-->
          <base-button
            :disabled="!canCheckUrl"
            @click="checkUrl"
            v-html="textInButtonCheckUrl"
            :type="searchPosition.googleExist.type || 'info'"
            :loading="searchPosition.checkUrlLoader"
            class="h-100"
          ></base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import BaseInput from "@/components/base-input.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    BaseInput,
    BaseButton
  },
  data() {
    return {
      countries: [{ code: 1, name: "Ru" }],
      searchPosition: {
        googleExist: {
          type: ""
        },
        checkUrlLoader: false,
        wasCheked: false,
        formWarning: false
      },

      taskData: {
        limit_per_circle: null,
        limit_circle_price: null,
        repeat_type: "day",
        name: "",
        type: "search",
        country: 1,
        search_query: "",
        target_url: "",
        price: "",
        date_started: new Date(),
        date_completed: null,
        time_on_page: 10,
        limit_per_user: -1,
        help_image_url: null
      }

      // canCheckUrl: false
    };
  },

  computed: {
    textInButtonCheckUrl() {
      if (
        this.searchPosition.googleExist.type == "success" &&
        this.searchPosition.wasCheked
      ) {
        return "<i class='fas fa-check mr-1'></i> Found in search result";
      } else if (
        this.searchPosition.googleExist.type == "warning" &&
        this.searchPosition.wasCheked
      ) {
        return "<i class='fas fa-exclamation-triangle'></i> Not exist in serch result";
      } else {
        if (this.searchPosition.checkUrlLoader)
          return "  <i  class='fas fa-spinner fa-spin'></i> Check URL";
        return "Check URL";
      }
    },
    canCheckUrl() {
      return (
        this.taskData.target_url != "" &&
        this.taskData.search_query != "" &&
        this.searchPosition.wasCheked == false
      );
    }
  },
  // watch: {
  //   taskData: {
  //     handler(newZ, oldZ) {
  //       this.canCheckUrl =
  //         this.taskData.target_url != "" &&
  //         this.taskData.search_query != "" &&
  //         this.searchPosition.wasCheked == false;
  //     },
  //     deep: true
  //   }
  // },
  methods: {
    inputInSearchTextOrUrl() {
      if (this.searchPosition.wasCheked == true) {
        this.searchPosition.googleExist.type = "";
        this.searchPosition.wasCheked = false;
      }
    },
    checkUrl() {
      return new Promise((res, rej) => {
        this.searchPosition.wasCheked = true;
        this.searchPosition.checkUrlLoader = true;

        setTimeout(() => {
          res(true);
        }, 1000);
      });
    }
  },
  updated() {
    console.log("ОБНОВИЛОСЬ");
  }
};
</script>
