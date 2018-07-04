<script lang="coffee">
import VueTidyRoutes from 'vue-tidyroutes'
import Person from '@/models/person.coffee'

Test =
    dependencies : ['hackit']
    name: 'Test'
    data: () ->
        msg: 
                top: 'hello'
                person: new Person('bob','smith')
        text: 'data'
    methods: 
        onClick: (e) ->
        onClick: (e) ->
                this.msg.top = this.text
        onHello: (value) ->
                this.text = value

VueTidyRoutes.route '/Test',
        name: 'Test'
        component: Test
export default Test
</script>
<style lang="scss">
.Test {}
</style>
<template>
<div class="Test">
    Hello World from Test component
    <table>
        <tr>
            <td>
                <h3>To child</h3>
                    <input v-model="text" v-on:keyup="onClick"/>
            </td>
            <td>

            </td>
        </tr>
    </table>
    <div>
        <h3>child</h3>
        <app-table :msg="msg" @hello="onHello" ></app-table>
    </div>
</div>
</template>