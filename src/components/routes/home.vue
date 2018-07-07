<script lang="coffee" >
import VueTidyRoutes from 'vue-tidyroutes'

home =
    name: 'home'
    data: () ->
        msg: 'some data'
        bills: [
            {name: "Water", icon:"waterdrop", date: "2018-06-01"},
            {name: "Electric", icon:"lightbulb", date: "2018-06-18"},
            {name: "Mortgage", icon: "home", date: "2018-06-23", isScheduled: true, amount: 778},
            {name: "Wireless", icon: "iphone", date: "2018-06-30", isScheduled: true, amount: 88}
        ]

VueTidyRoutes.route '/',
        name: 'home'
        component: home

export default home
</script>

<style lang="stylus" >
.title
    grid-area title
.title-button
    grid-area title-button
.plus-button
    border solid 1px #e0dfdf
    padding 5px 5px
    border-radius 4px
.card-header
    display grid
    grid-template-columns: 19fr 1fr
    grid-template-areas:
        "title title-button"
.bill
    margin-bottom: 20px
</style>

<template lang="pug" >
div
    row
        i-col(span="12")
            .card-header
                h1.title 
                    | Bills & Payments
                div.title-button
                    h2
                        icon.plus-button(type="plus-round")
            card        
                ul
                    li.bill(is="summary-view-bills" v-for="bill in bills" v-bind:bill="bill")
        i-col(span="12")
    row
        i-col(span="12")
        i-col(span="12")
</template>