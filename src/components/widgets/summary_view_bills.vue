<script lang="coffee" >

export default 
    name: 'summary-view-bills'
    props: ['bill']
    methods:
        icon: (s) ->
            iconMap[s]
</script>

<style scoped lang="stylus" >
@import "../../ruby-theme/variables.styl"
/deep/ .waterdrop
    color #00a7ff
    fill currentColor
/deep/ .lightbulb
    color #ffc400
    fill currentColor
/deep/ .home
    color #ff00f6
    fill currentColor
/deep/ .iphone
    color #ff0392
    fill currentColor
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
.button
    border solid 1px lighten($primary-color,80%)
    text-align center
    border-radius 8px
    padding-top 5px
    padding-bottom 5px
.card-item-type
    padding 10px
    .aspect1
        width 100%
        padding-top 100%
        position relative
        /deep/ .circle
            border-radius 50%
            position absolute
            top 0
            bottom 0
            left 0
            right 0
            /deep/ svg
                path
                    width 100% !important

</style>

<template lang="pug" >
li.summary_view_bills
        .card-item
            .card-item-type
                .aspect1
                    svg-icon.circle(v-bind:icon="bill.icon")
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