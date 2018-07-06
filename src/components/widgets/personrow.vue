<script lang="coffee" >
export default 
     name: 'personrow'
     props: ['person']
</script>

<style lang="stylus" >

</style>

<template lang="pug">
li.personrow
    div
    ul
        li {{ person.name | capitalize }}
        li {{ person.email}}
        li {{ person.birthDate | dateFormat }}
</template>