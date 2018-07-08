import Vue from 'vue'
import personrow from 'widget/personrow'
import summary_view_bills from 'widget/summary_view_bills'
import icons from 'widget/icons'
import summary_view_banks from 'widget/summary_view_bank'
import summary_view_family from 'widget/summary_view_family'

Vue.component('person-row', personrow)
Vue.component('summary-view-bills', summary_view_bills)
Vue.component('svg-icon',icons)
Vue.component('summary-view-banks',summary_view_banks)
Vue.component('summary-view-family-member', summary_view_family)