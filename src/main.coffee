# The Vue build version to load with the `import` command
# (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueTidyRoutes from 'vue-tidyroutes'
import VueResource from 'vue-resource'
import '@/components/routes/index.coffee'
import '@/components/widgets/index.coffee'
import '@/services/index.coffee'
import '@/filters/index.coffee'
import store from '@/store/index.coffee'
Vue.use(VueResource)
Vue.config.productionTip = false

new Vue
  el: '#app',
  router: new VueRouter
           routes: VueTidyRoutes.export()
           mode: 'history'
  components: { App }
  template: '<App/>'
  store: store
