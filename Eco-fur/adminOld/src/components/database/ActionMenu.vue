<template lang="html">
  <b-dropdown>
    <button class="button is-small is-default" slot="trigger">
      <span>Action</span>
      <span class="icon is-small">
        <i class="fa fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>

    <b-dropdown-item v-on:click="openInConsole">
      <span class="icon has-text-info">
        <i class="fa fa-globe"></i>
      </span>
      Открыть в консоле
    </b-dropdown-item>
    <b-dropdown-item v-on:click="onDelete">
      <span class="icon has-text-danger">
        <i class="fa fa-trash"></i>
      </span>
      Удалить товар
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import firebaseClient, { DATA_LINK } from "@/clients/firebaseClient";

export default {
  name: "ActionMenu",
  props: {
    context: {
      required: true
    }
  },
  methods: {
    openInConsole() {
      const url = `${DATA_LINK}${this.context.root}/${
        this.context.row[".key"]
      }`;
      window.open(url, "_blank");
    },
    onDelete() {
      this.$dialog.confirm({
        title: "Удаление товара",
        message: "Вы уверены что вы хотите  <b>удалить</b> товар?",
        confirmText: "Удалить",
        type: "is-danger",
        hasIcon: true,
        onConfirm: this.deleteData
      });
    },
    async deleteData() {
      const ref = `${this.context.root}/${this.context.row[".key"]}`;
      await firebaseClient.database.deleteDataByRef(ref);
      this.$emit("trigger", "delete");
    }
  }
};
</script>

<style lang="css">
</style>
