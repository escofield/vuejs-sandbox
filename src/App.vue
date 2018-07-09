<script lang="coffee">
import logo from '@/assets/logo.svg'

export default
    name: 'App'
    data: () ->
        logo: logo
    created: () ->
        this.$store.dispatch 'persons/fetchPeople'
    computed: 
        activeMenu: () ->
            this.$route.name
        isAuthorized: () ->
                    this.$store.getters['auth/isAuthorized']
    methods:
        menuChange: (v) ->
            this.$router.push({ name: v })
</script>
<style scoped lang="stylus">
.layout
    border 1px solid #d7dde4
    position relative
    border-radius 4px
    overflow hidden

.layout-logo
    width 100px
    height 30px
    border-radius 3px
    float left
    position relative
    top 15px
    left 20px
    padding-left: 30px
    img
        height: 30px

.layout-bar-nav
    width 420px
    margin 0 auto
    margin-right 20px

.layout-footer-center
    text-align center

.ivu-menu-horizontal.ivu-menu-light:after
    background none
content
    .ivu-menu
        margin-bottom 50px
        width 560px
        margin auto
.content
    margin-left: 50px
    margin-right: 50px

</style>
<template lang="pug">
   .layout
      layout
        header(v-if="isAuthorized")
            i-menu(mode="horizontal" theme="dark")
                .layout-logo
                    img(:src="logo")
                .layout-bar-nav
                    menu-item(name="upperoptions1")
                        icon(type="ios-keypad")
                        router-link(:to="{ name: 'home'}") Home
                    menu-item(name="upperoptions1")
                        icon(type="ios-paper")
                        router-link(:to="{ name: 'people'}") People
        content(v-if="isAuthorized" :style="{padding: '0 50px'}")
            i-menu(mode="horizontal" theme="light" @on-select="menuChange" :active-name="activeMenu")
                menu-item(name="overview" ) Overview
                menu-item(name="bills") Bills
                menu-item(name="expenses") Expenses
                menu-item(name="budget") Budget
                menu-item(name="wallet") Wallet
                menu-item(name="documents") Documents
        div.content
            router-view
        footer.layout-footer-center 2011-2016 © TalkingData
</template>
