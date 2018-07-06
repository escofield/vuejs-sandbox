<script lang="coffee" >
import VueTidyRoutes from 'vue-tidyroutes'
import Person from '@/models/person.coffee'
import { mapActions } from 'vuex'

person =
    name: 'person'
    data: () ->
        person: new Person()
    methods:
        addPerson: (person) ->
                this.$store.dispatch 'persons/addPerson', person
                this.$router.push 'people'
VueTidyRoutes.route '/person',
        name: 'person'
        component: person

export default person
</script>

<style lang="stylus" >

</style>

<template lang="pug" >
.person
        input(v-model="person.name" placeholder="Name")
        input(v-model="person.email" placeholder="Email")
        input(v-model="person.birthDate" placeholder="Date of birth")
        button(type='button' v-on:click="addPerson(person)") Save Person
</template>