# The Vue build version to load with the `import` command
# (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/ruby-theme/index.less'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueTidyRoutes from 'vue-tidyroutes'
import VueResource from 'vue-resource'
import router from '@/components/routes/index.coffee'
import '@/components/widgets/index.coffee'
import '@/services/index.coffee'
import '@/filters/index.coffee'
import store from '@/store/index.coffee'
import iView from 'iview';
Vue.use(iView)
Vue.use(VueResource)
Vue.config.productionTip = false

vue = new Vue
  el: '#app',
  router: router
  components: { App }
  template: '<App/>'
  store: store

vue.$AppConfig =
  notice:
    duration: 0