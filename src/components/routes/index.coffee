import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTidyRoutes from 'vue-tidyroutes'
import iView from 'iview';

import 'route/bills'
import 'route/budget'
import 'route/documents'
import 'route/expenses'
import 'route/overview'
import 'route/wallet'
import 'route/login'

Vue.use(VueRouter)

router = new VueRouter
           routes: VueTidyRoutes.export()
           mode: 'history'

router.beforeEach (to, from, next) ->
    iView.LoadingBar.start()
    next()

router.afterEach (to, from) ->
    iView.LoadingBar.finish()
    window.scrollTo(0, 0)

export default router