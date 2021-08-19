import Vue from 'vue'
import Chakra, {CThemeProvider, CReset} from '@chakra-ui/vue'
import router from "./router";
// import store from "./store";
import App from './App.vue'


Vue.use(Chakra)

new Vue({
  router,
  // store,
  render: (h) => h(CThemeProvider, [h(CReset),h(App)])
}).$mount("#app");
