import Vue from 'vue'
Vue.filter 'capitalize', (value) ->
     if value?
         value = value.toString()
         value = value.charAt(0).toUpperCase() + value.slice(1)
     return value
