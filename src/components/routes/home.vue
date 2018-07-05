<script lang="coffee" >
import VueTidyRoutes from 'vue-tidyroutes'

home =
    name: 'home'
    data: () ->
        msg: 'some data'

VueTidyRoutes.route '/',
        name: 'home'
        component: home

export default home
</script>

<style lang="scss" >
.home {}
</style>

<template >
<div class="home">
    Hello World from home component
</div>
</template>