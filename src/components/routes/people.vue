<script lang="coffee" >
import VueTidyRoutes from 'vue-tidyroutes'

people =
    name: 'people'
    data: () ->
        msg: 'some data'
    computed:
        people: () ->
                    this.$store.getters['persons/getPeople']

VueTidyRoutes.route '/people',
        name: 'people'
        component: people

export default people
</script>

<style lang="stylus" >

</style>

<template lang="pug">
.people
    | Hello World from people component
    router-link(:to="{ name: 'person'}") Add Person
    ul
        li(is="person-row" v-for="person in people" v-bind:person="person")
</template>