<script lang="coffee" >
import VueTidyRoutes from 'vue-tidyroutes'

budget =
    name: 'budget'
    data: () ->
        msg: 'some data'
    beforeRouteEnter: (to, from, next) ->
        next (vm) ->
            vm.$store.dispatch 'auth/validateAuth', [vm.$router, vm.$route]

VueTidyRoutes.route '/budget',
        name: 'budget'
        component: budget

export default budget
</script>

<style scoped lang="stylus" >
.budget {}
</style>

<template lang="pug" >
.budget
    Hello World from budget component

</template>