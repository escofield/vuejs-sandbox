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
        banks: [
            {type: "Bofa Travel Rewards", accountDisplay: "1234 **** **** 6789", balance: -1000},
            {type: "Ruby Savigns account", accountDisplay: "9876 **** **** 6238", balance: 3000},
            {type: "Checking account", accountDisplay: "First Tennessee", balance: 2500.80}
        ]
        family: [
            {memberType: "Collaborator", name: "Essie Barnes", avatar: "user.svg"},
            {memberType: "Owner", name: "Lucille Barnes", avatar: "lb.svg"}
        ]


VueTidyRoutes.route '/',
        name: 'home'
        component: home

export default home
</script>

<style scoped lang="stylus" >
@import "../../ruby-theme/variables.styl"
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
.button
    border solid 1px lighten($primary-color,80%)
    text-align center
    border-radius 8px
    padding-top 5px
    padding-bottom 5px
    width 100%
.center
    text-align center
.round-button
    width 50px
    margin auto
    margin-top: 40px
h2.secondRow
    margin-top:30px
    margin-bottom: 20px
.fullHeight
    height: calc(100% - 37px)

.infoBill
    grid-area bills
.infoBank
    grid-area banks
.infoDash
    display grid
    grid-template-columns: 2fr 2fr
    grid-template-areas:
        "bills    banks"
    margin-top 40px
.featureDash
    margin-top 40px
@supports (display: grid)
    .featureFamily
    .featureBudgets
    .featureExpenses
    .infoBill
    .infoBank
        width: auto

.featureFamily
    grid-column span 1
    grid-area family
.featureBudgets
    grid-column span 1
    grid-area budgets
.featureExpenses
    grid-column span 1
    grid-area expenses
.featureDash
    display grid
    grid-template-columns: 1fr 1fr 1fr
    grid-template-areas:
        "expenses budgets family"

</style>

<template lang="pug" >
div
    row.infoDash(:gutter="30")
        i-col.infoBill(span="12")
            .card-header
                h1.title 
                    | Bills & Payments
                div.title-button
                    h2
                        icon.plus-button(type="plus-round")
            card.fullHeight
                ul
                    li.bill(is="summary-view-bills" v-for="bill in bills" v-bind:bill="bill")
                .button
                    router-link(:to="{ name: 'person'}") View All Bills
        i-col.infoBank(span="12")
            div
                .card-header
                    h1.title 
                        | Banks & Cards
                    div.title-button
                        h2
                            icon.plus-button(type="plus-round")
            card.fullHeight        
                ul
                    li.bill(is="summary-view-banks" v-for="bank in banks" v-bind:bank="bank")

    row.featureDash(:gutter="30")
        i-col.featureExpenses(span="8")
            div
                .card-header
                    h1.title 
                        | Expenses
                    div.title-button
                        h2.center
                            icon.plus-button(type="plus-round")
            card.fullHeight
                header.center
                    h2.secondRow
                        | No expenses, yet.
                p
                    | Start adding expenses to keep track of where your money goes.
                svg-icon.round-button(v-bind:icon="'round'")
        i-col.featureBudgets(span="8")
            .card-header
                h1.title 
                    | Budgets
                div.title-button
                    h2.center
                        icon.plus-button(type="plus-round")
            card.fullHeight
                header.center
                    h2.secondRow
                        | No budgets
                p
                    | Start adding budgest to keep track of where your money goes.
                svg-icon.round-button(v-bind:icon="'round'")
        i-col.featureFamily(span="8")
            .card-header
                h1.title 
                    | Family
                div.title-button
                    h2
                        icon.plus-button(type="plus-round")
            card.fullHeight
                ul
                    li.bill(is="summary-view-family-member" v-for="member in family" v-bind:member="member")

</template>