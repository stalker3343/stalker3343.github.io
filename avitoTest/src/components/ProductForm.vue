<template>
  <form @submit.prevent="onSave" class="admin-product-form">
    <div class="row">
      <div class="col-md-6">
        <label class="admin-product-form__label input">
          <span class="input__span">Название товара</span>
          <input
            v-validate="'required'"
            name="name"
            v-model="model.title"
            placeholder="Название"
            :class="{ 'input__error': errors.has('name') }"
            class="input__input"
            type="text"
          />
          <span class="small text-danger" v-show="errors.has('name')">Введите название</span>
        </label>
        <label class="admin-product-form__label input">
          <span class="input__span">Цена</span>
          <input
            v-validate="'required'"
            v-model.number="model.price"
            name="price"
            placeholder="Цена"
            class="input__input"
            type="number"
            :class="{ 'input__error': errors.has('price') }"
          />
          <span class="small text-danger" v-show="errors.has('price')">Введите цену</span>
        </label>
        <label class="admin-product-form__label input">
          <span class="input__span">Продавец:</span>
          <select
            v-model="model.relationships.seller"
            name="seller"
            v-validate="'required'"
            :class="{ 'input__error': errors.has('seller') }"
          >
            <option v-for="seller in sellers" :key="seller.id" :value="seller.id">{{seller.name}}</option>
          </select>
          <span class="small text-danger" v-show="errors.has('seller')">Выберете продавца</span>
        </label>
      </div>
      <div class="col-md-6">
        <label class="admin-product-form__label input">
          <span class="input__span">Категория:</span>
          <select
            v-model="model.category"
            name="kateg"
            v-validate="'required'"
            :class="{ 'input__error': errors.has('kateg') }"
          >
            <option value="immovable">Недвижимость</option>
            <option value="cameras">Камеры</option>
            <option value="auto">Автомобили</option>
            <option value="laptops">Ноутбуки</option>
          </select>
          <span class="small text-danger" v-show="errors.has('seller')">Выберете продавца</span>
        </label>
        <label class="admin-product-form__label input">
          <span class="input__span">Картинка:</span>
          <div class="input__img-input-wrapper" v-for="(pic, index) in model.pictures" :key="index">
            <div class="input__img-input">
              <input
                v-validate="'required'"
                :name="`picture${index}`"
                :class="{ 'input__error': errors.has('picture') }"
                v-model="model.pictures[index]"
                placeholder="Картинка"
                class="input__input"
                type="text"
              />
              <button @click.prevent="removePicture(index)" class="btn btn-danger input__dell-btn">-</button>
            </div>

            <span
              class="small text-danger"
              v-show="errors.has(`picture${index}`)"
            >Введите ссылку на картинку</span>
          </div>
          <button @click.prevent="addPicture" class="btn btn-success">+</button>
        </label>
      </div>
    </div>

    <input
      type="submit"
      class="btn btn-primary"
      :value="isEditable ? 'Изменить товар' : 'Добавить товар'"
    />
  </form>
</template>

<script>
import fb from "firebase/app";
export default {
  props: ["model", "isEditable"],
  data() {
    return {
      sellers: this.$store.state.sellers,
      seller: ""
    };
  },
  created() {},
  methods: {
    findSalers(id) {
      return this.sellers.find(el => el.id == id);
    },
    onSave() {
      this.$validator.validateAll().then(data => {
        if (!data) return console.log("почини");
        this.$emit("saveProduct", this.model);
      });
    },
    addPicture() {
      this.model.pictures.push("");
    },
    removePicture(index) {
      this.model.pictures.splice(index, 1);
    }
  }
};
</script>

<style lang="scss">
.admin-product-form {
  &__label {
    margin-bottom: 20px;
  }
}
.input {
  display: flex;
  flex-direction: column;
  &__error {
    border-color: #ff3333;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(255, 71, 71, 0.6);
  }

  &__img-input-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
  }
  &__img-input {
    display: flex;
  }
  &__dell-btn {
    margin-left: 10px;
  }
  &__input {
    width: 100%;
    border-radius: 5px;
    border: 1px solid grey;
    padding: 5px;
  }
}
</style>