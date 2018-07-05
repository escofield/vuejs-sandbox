import Vue from 'vue'
import Vuex from 'vuex'

import persons from '@/store/modules/persons.coffee'

Vue.use(Vuex)

export default new Vuex.Store
    strict: true
    modules:
        persons: persons

