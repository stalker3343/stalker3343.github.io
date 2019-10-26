import messages from "./codeMessage";

export default {
  install(Vue, options) {
    Vue.prototype.$message = function(dataOfMessage, type) {
      if (!dataOfMessage) return;
      const message = messages[dataOfMessage] || dataOfMessage;
      if (type == "error") {
        M.toast({ html: `[Ошибка] ${message}` });
      } else {
        M.toast({ html: message });
      }
    };
  }
};
