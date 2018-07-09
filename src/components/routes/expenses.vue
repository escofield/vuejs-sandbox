<script lang="coffee" >
import VueTidyRoutes from 'vue-tidyroutes'

expenses =
    name: 'expenses'
    data: () ->
        msg: 'some data'
    beforeRouteEnter: (to, from, next) ->
        next (vm) ->
            vm.$store.dispatch 'auth/validateAuth', [vm.$router, vm.$route]


VueTidyRoutes.route '/expenses',
        name: 'expenses'
        component: expenses

export default expenses
</script>

<style scoped lang="scss" >
.expenses {}
</style>

<template >
<div class="expenses">
    <Row>
        <Col span="12">col-12</Col>
        <Col span="12">col-12</Col>
    </Row>
    <br>
    <Row>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
    </Row>
</div>
</template>