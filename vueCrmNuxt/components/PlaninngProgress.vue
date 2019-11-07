<template>
  <section>
    <div>
      <p>
        <strong>{{category.name}}</strong>
        {{spent}} из {{category.limit}}
      </p>
      <div class="progress">
        <div class="determinate green" style="width:40%"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    category: {
      type: Object,
      required: true
    },
    spent: {
      type: Number,
      required: true
    }
  }
};
</script>