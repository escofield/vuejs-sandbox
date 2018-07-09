import Vue from 'vue'
import Vuex from 'vuex'

import persons from 'module/persons.coffee'
import auth from 'module/auth.coffee'

Vue.use(Vuex)

export default new Vuex.Store
    strict: true
    modules:
        persons: persons
        auth: auth

