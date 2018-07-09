<script lang="coffee" >
export default 
    name: 'test_test'
    data: () ->
         msg: 'some data'
         isCrazy: false
    computed:
        headingClasses: () ->
            return  
                    red: this.isCrazy
                    blue: !this.isCrazy
                    shadow: this.isCrazy
    methods:
        toggleClass: () ->
            this.isCrazy = !this.isCrazy
</script>

<style lang="stylus" >
.red 
  color red
.blue
  color blue
.shadow
  box-shadow 5px 5px 5px 5px rgba(0,0,0,0.2)
</style>

<template lang="pug" >
.test_test
    h1(:class="headingClasses")
        | {{ msg }}

</template>