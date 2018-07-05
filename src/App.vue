<script lang="coffee">
export default
    name: 'App'
    created: () ->
        this.$store.dispatch 'persons/fetchPeople'  
</script>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
<template>
<div id="app">
<ul>
    <li><router-link :to="{ name: 'home'}">Home</router-link>
    </li>
    <li>
    <li><router-link :to="{ name: 'people'}">People</router-link>
    </li>
</ul>
    <router-view/>
</div>
</template>
