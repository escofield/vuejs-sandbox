<script lang="coffee" >
export default 
     name: 'personrow'
     props: ['person']
</script>

<style lang="scss" >
.personrow {}
</style>

<template >
<li class="personrow">
    <div>
        <ul>
            <li>{{person.name | capitalize}}</li>
            <li>{{person.email}}</li>
            <li>{{person.birthDate}}</li>
        </ul>
    </div>
</li>
</template>