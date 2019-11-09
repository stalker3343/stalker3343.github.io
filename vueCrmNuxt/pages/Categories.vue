<template>
  <div>
    <div class="page-title">
      <h3>Категории</h3>
    </div>
    <section>
      <div class="row">
        <div class="col s12 m6">
          <Add></Add>
        </div>
        <div class="col s12 m6">
          <Edit></Edit>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Add from "@/components/CategoriesAdd";
import Edit from "@/components/CategoriesEdit";
export default {
  middleware: ["auth"],
  components: {
    Add,
    Edit
  }
};
</script>