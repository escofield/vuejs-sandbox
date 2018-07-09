<script lang="coffee" >
import VueTidyRoutes from 'vue-tidyroutes'

wallet =
    name: 'wallet'
    data: () ->
        msg: 'some data'
    beforeRouteEnter: (to, from, next) ->
        next (vm) ->
            vm.$store.dispatch 'auth/validateAuth', [vm.$router, vm.$route]

VueTidyRoutes.route '/wallet',
        name: 'wallet'
        component: wallet

export default wallet
</script>

<style lang="stylus" >
.wallet {}
</style>

<template lang="pug" >
.wallet
    | Hello World from wallet component

</template>