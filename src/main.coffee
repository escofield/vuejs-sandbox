# The Vue build version to load with the `import` command
# (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import injector from 'vue-inject'
import Vue from 'vue'
import App from './App'
import VueTidyRoutes from 'vue-tidyroutes'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

# widgets
import AppTable from '@/components/widgets/AppTable'

Vue.component('app-table', AppTable)
# route components
import '@/components/routes/HelloWorld'
import '@/components/routes/Test'

Vue.use(VueRouter)

# services
require('./services/hackit.coffee')
Vue.use(injector)

new Vue
  el: '#app',
  router: new VueRouter
           routes: VueTidyRoutes.export()
           mode: 'history'
  components: { App }
  template: '<App/>'
