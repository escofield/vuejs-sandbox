import Vue from 'vue'
Vue.filter 'prettyDate', (value) ->
    d = Date.parse(value)
    if isNaN(value) and not isNaN(d)
        value = new Date(d).toLocaleDateString 'en-US', 
                                    month: 'long'
                                    day: 'numeric'
     return value
