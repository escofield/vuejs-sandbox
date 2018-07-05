import Vue from 'vue'
Vue.filter 'dateFormat', (value) ->
     if value?
         value = new Date(value).toISOString().split('T')[0]
     return value
