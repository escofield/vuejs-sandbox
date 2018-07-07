import Vue from 'vue'
Vue.filter 'dateFormat', (value) ->
    d = Date.parse(value)
    if isNaN(value) and not isNaN(d)
        value = new Date(d).toISOString().split('T')[0]
    return value
