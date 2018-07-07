<script lang="coffee" >
export default 
    name: 'summary-view-bills'
    props: ['bill']
</script>

<style scoped lang="stylus" >

.ivu-icon-waterdrop
    color #00a7ff
.ivu-icon-lightbulb
    color #ffc400
.ivu-icon-home
    color #c600ff
.ivu-icon-iphone
    color #ff0392
.card-item-type
    grid-area card-item-type
    align-self center
    text-align center
.card-item-scheduled-date
.card-item-due-date
    grid-area card-item-date
.card-item-name
    grid-area card-item-name
.card-item-payment
    grid-area card-item-payment
    align-self center
    text-align right
.card-item
    display grid
    grid-template-columns: 2fr 10fr 5fr
    grid-template-areas:
        "card-item-type card-item-date card-item-payment"\
        "card-item-type card-item-name card-item-payment"
.money
    font-weight: bold

</style>

<template lang="pug" >
li.summary_view_bills
        .card-item
            .card-item-type
                h1
                    icon(:type="bill.icon")
            .card-item-due-date(v-if="!bill.isScheduled")
                | Due {{ bill.date | prettyDate }}
            .card-item-scheduled-date(v-if="bill.isScheduled")
                | Scheduled for {{ bill.date | prettyDate }}
            h3.card-item-name
                | {{ bill.name }}
            router-link.card-item-payment.button(v-if="!bill.isScheduled" :to="{ name: 'person'}") Make Payment
            .card-item-payment.money(v-if="bill.isScheduled")
                | {{ bill.amount | currency }}
</template>