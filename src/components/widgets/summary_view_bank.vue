<script lang="coffee" >
export default 
     name: 'summary_view_bank'
     props: ['bank']
</script>

<style scoped lang="stylus" >
@import "../../ruby-theme/variables.styl"
.negative
    color: $error-color

.card-item-type
    grid-area title
.card-display
    grid-area displayName
.card-balance
    grid-area balance
    text-align right
.card-item
    display grid
    grid-template-columns: 4fr 2fr
    grid-template-areas:
        "title          balance"\
        "displayName    balance"

</style>

<template scoped lang="pug">
.banks
    .card-item
        .card-item-type
            | {{ bank.type }}
        h3.card-display
            | {{ bank.accountDisplay }}
        h3.card-balance(v-if="bank.balance >= 0")
            | {{ bank.balance | currency }}
        h3.negative.card-balance(v-if="bank.balance < 0")
            | {{ bank.balance | currency }}
</template>