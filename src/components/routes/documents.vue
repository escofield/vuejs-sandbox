<script lang="coffee" >
import VueTidyRoutes from 'vue-tidyroutes'

documents =
    name: 'documents'
    data: () ->
        msg: 'some data'
    beforeRouteEnter: (to, from, next) ->
        next (vm) ->
            vm.$store.dispatch 'auth/validateAuth', [vm.$router, vm.$route]


VueTidyRoutes.route '/documents',
        name: 'documents'
        component: documents

export default documents
</script>

<style scoped lang="stylus" >
.documents {}
</style>

<template lang="pug" >
.documents Hello World from documents component

</template>