import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "vuetify/styles";
import router from "./router";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});
const pinia = createPinia();

createApp(App).use(pinia).use(vuetify).use(router).mount("#app");
