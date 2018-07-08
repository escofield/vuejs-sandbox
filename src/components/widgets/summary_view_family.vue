<script lang="coffee" >
export default 
     name: 'summary_view_family'
     props: ['member']

</script>

<style scoped lang="stylus" >
.summary_view_family {}
.avatar
    width 50px
    margin auto
.avatar
    grid-area avatar
.member-type
    grid-area member-type
.member-name
    grid-area member-name
.card-item
    display grid
    grid-template-columns: 2fr 4fr
    grid-template-areas:
        "avatar    member-type"\
        "avatar    member-name"
</style>

<template lang="pug" >
.card-item
    img.avatar(:src="'/static/avatars/' + member.avatar")
    .member-type
        | {{ member.memberType}}
    h3.member-name
        | {{ member.name }}

</template>