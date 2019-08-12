<template>
  <div class="container">
    <div class="item-container">
      <div class="row">
        <div class="col-md-5">
          <hooper class="top-slider" group="group1">
            <slide v-for="(pic, index) in product.pictures" :key="index">
              <img :src="pic" alt />
            </slide>
          </hooper>

          <hooper class="down-slider" group="group1" :itemsToShow="3" :centerMode="true">
            <slide v-for="(pic, index) in product.pictures" :key="index">
              <img :src="pic" alt />
            </slide>

            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
        </div>

        <div class="col-md-7">
          <div class="product-title">{{product.title}}</div>

          <div class="product__salers salers product__salers-product mt-1 mb-3">
            <div class="salers__name">{{ salers.name }}</div>
          </div>

          <div class="product-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, laborum quo. Debitis quae quasi impedit? Maiores dicta obcaecati alias dignissimos, at sapiente, officia architecto iusto illum, aliquid quidem commodi minima.
            Repudiandae, possimus consequatur exercitationem corrupti asperiores porro laboriosam repellat quo. Corporis assumenda facilis doloremque officiis aperiam veritatis atque reprehenderit hic, sapiente voluptas! Id magni, aspernatur eum a ex totam perspiciatis.
            Earum perspiciatis, illo dicta velit sint delectus, rem distinctio doloremque laudantium quo reprehenderit expedita odio ea deserunt ut accusantium cupiditate sunt. Ipsa doloribus deserunt sint itaque alias modi sunt quas.
            Odio, magnam ipsam totam deserunt provident at illum dolores animi officiis consequuntur quidem neque magni incidunt temporibus non vero quibusdam commodi earum sequi quasi necessitatibus laborum iusto sit nostrum. Architecto?
          </div>

          <hr />
          <div v-show="product.price" class="product-price">{{product.price | capitalize }} р.</div>

          <hr />
          <div class="btn-group cart">
            <b-button
              @click="togleCard"
              href="#"
              :variant="isInCard ? 'danger' : 'primary' "
            >{{btnText}}</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation
  },
  data() {
    return {
      id: this.$route.params.id,
      isInCard: false,
      btnText: "В корзину"
    };
  },
  methods: {
    togleCard() {
      if (this.isInCard) {
        this.btnText = "В корзину";
        this.isInCard = false;
        this.$store.commit("removeCartItem", this.product.id);
      } else {
        this.btnText = "Убрать из корзины";
        this.isInCard = true;
        this.$store.commit("addCartItem", this.product.id);
      }
    }
  },
  mounted() {
    if (this.$store.state.cartItems.includes(this.product)) {
      this.isInCard = true;
      this.btnText = "Убрать из корзины";
    } else {
      this.isInCard = false;
      this.btnText = "В корзину";
    }
  },
  computed: {
    product() {
      return this.$store.state.products.find(el => el.id === this.id);
    },
    salers() {
      return this.$store.state.sellers.find(
        el => el.id == this.product.relationships.seller
      );
    }
  },
  filters: {
    capitalize(value) {
      if (value) return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  }
};
</script>
<style scope>
.hooper-next,
.hooper-prev {
  background-color: white !important;
}

.top-slider {
  height: auto;
}
.down-slider {
  height: auto;
}

.product-title {
  font-size: 35px;
  font-weight: 700;
}

.product-desc {
  font-size: 14px;
}

.product-price {
  font-size: 22px;
}
.product__salers-product {
  font-size: 25px;
}
</style>