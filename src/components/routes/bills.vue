<script lang="coffee" >
import VueTidyRoutes from 'vue-tidyroutes'

bills =
    name: 'bills'
    data: () ->
        msg: 'some data'

    computed:
        people: () ->
                    this.$store.getters['persons/getPeople']
        isAuthorized: () ->
                    this.$store.getters['auth/isAuthorized']
    beforeRouteEnter: (to, from, next) ->
        next (vm) ->
            vm.$store.dispatch 'auth/validateAuth', [vm.$router, vm.$route]

VueTidyRoutes.route '/bills',
        name: 'bills'
        component: bills

            



export default bills
</script>

<style scoped lang="stylus" >

</style>

<template lang="pug">
.bills
    | Hello World from bills component
    router-link(:to="{ name: 'person'}") Add Person
    ul
        li(is="person-row" v-for="person in people" v-bind:person="person")
</template>