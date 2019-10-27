<template>
  <div>
    <div class="page-subtitle">
      <h4>Редактировать</h4>
    </div>
    <p v-if="categories.length<1">У вас нет категорий</p>
    <form v-else>
      <div class="input-field">
        <select v-model="categ" ref="select">
          <option v-for="categ in categories" :key="categ.id" :value="categ.id">{{categ.name}}</option>
        </select>
        <label>Выберите категорию</label>
      </div>

      <div class="input-field">
        <input v-model="name" type="text" id="name" />
        <label for="name">Название</label>
        <span class="helper-text invalid">TITLE</span>
      </div>

      <div class="input-field">
        <input v-model="limit" id="limit" type="number" />
        <label for="limit">Лимит</label>
        <span class="helper-text invalid">LIMIT</span>
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        Обновить
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    select: null,
    categ: null,
    name: "",
    limit: 0
  }),
  computed: {
    ...mapGetters(["categories"])
  },
  methods: {
    ...mapActions(["loadCateg"])
  },
  watch: {
    categories: function() {
      //features of materialize CSS
      this.categ = this.categories[0].id;
      setTimeout(() => {
        this.select = M.FormSelect.init(this.$refs.select);
        M.updateTextFields();
      }, 0);
    },
    categ: function() {
      const { name, limit } = this.categories.find(el => el.id === this.categ);
      this.name = name;
      this.limit = limit;
    }
  },
  async mounted() {
    await this.loadCateg();

    this.categ = this.categories[0].id;
    //features of materialize CSS
    setTimeout(() => {
      this.select = M.FormSelect.init(this.$refs.select);
      M.updateTextFields();
    }, 0);
  },
  beforeDestroy() {
    if (this.select && this.select.destroy()) {
      this.select.destroy();
    }
  }
};
</script>