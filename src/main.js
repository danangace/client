import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Snotify from "vue-snotify";
import "vue-snotify/styles/material.css";
import ImageMagnifier from "vue-image-magnifier";

Vue.use(ImageMagnifier);
Vue.use(Snotify);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
