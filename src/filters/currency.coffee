import Vue from 'vue'
Vue.filter 'currency', (value) ->
     if not isNaN(value)
        formatter = new Intl.NumberFormat 'en-US',
                                style: 'currency',
                                currency: 'USD',
                                minimumFractionDigits: 2
        value = formatter.format(value)
     return value
