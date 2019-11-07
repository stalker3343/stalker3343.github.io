import messages from "./codeMessage";

export default {
  install(Vue, options) {
    Vue.prototype.$message = function(dataOfMessage, type) {
      if (!dataOfMessage) return;
      const message = messages[dataOfMessage] || dataOfMessage;
      if (type == "error") {
        console.log(this);

        this.$bvToast.toast(`${message}`, {
          title: "Ошибка",
          variant: "warning",

          // autoHideDelay: 5000,
          solid: true
          // appendToast: append
        });
        // M.toast({ html: `[Ошибка] ${message}` });
      } else {
        this.$bvToast.toast(`${message}`, {
          title: "Сообщение",
          variant: "primary",

          // autoHideDelay: 5000,
          solid: true
          // appendToast: append
        });
        // M.toast({ html: message });
      }
    };
  }
};
