<script lang="coffee">
import Person from '@/models/person.coffee'

export default 
    dependencies : ['hackit']
    props: 
        msg: 
            top: String #type can be any constructor.
            person: Person
    name: 'AppTable'
    methods: 
            onReset: (e) ->
                this.$emit('hello','Welcome')
    data: () ->
         msg2: this.hackit.getValue()
</script>
<style lang="scss">
.AppTable {}
</style>
<template>
<div id="bob" class="AppTable">
    Hello World from AppTable component {{ msg2 }}
    <br/>
    <h4>message from parent</h4>
    {{ msg.top }}
    {{ msg.person.getFirst() }}
    {{ msg.person.getLast() }}
    <button type="button" @click="onReset">reset</button>
</div>
</template>
