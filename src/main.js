import Vue from 'vue'
import App from './App.vue'

import AppPreHeader from './components/preheader.vue'
import AppJoin from './components/join.vue'
import AppFooter from './components/footer.vue'


Vue.component('AppPreheader', AppPreHeader);
Vue.component('AppJoin', AppJoin);
Vue.component('AppFooter', AppFooter);



new Vue({
  el: '#app',
  render: h => h(App)
})
