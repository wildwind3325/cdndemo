import Vue from 'vue';
import App from './App';
import VueI18n from 'vue-i18n';
import router from './router';
import axios from 'axios';
import './api/enhance';
import ViewUI from 'view-design';
import './main.css';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.use(VueI18n);
Vue.locale = () => { };
Vue.use(ViewUI, {
  i18n: (key, value) => i18n.t(key, value)
});
let i18n = new VueI18n({
  locale: 'zh',
  messages: {
    en: Object.assign({}, iview.langs['en-US']),
    zh: Object.assign({}, iview.langs['zh-CN'])
  }
});

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app');