import Vue from "vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import Home from "./views/Home.vue";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(Home)
}).$mount("#app");
