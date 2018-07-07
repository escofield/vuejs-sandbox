<script lang="coffee">
import logo from '@/assets/logo.svg'

export default
    name: 'App'
    data: () ->
        logo: logo
    created: () ->
        this.$store.dispatch 'persons/fetchPeople'  
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
        header
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
        content(:style="{padding: '0 50px'}")
            i-menu(mode="horizontal" theme="light" active-name="1")
                menu-item(name="Overview")
                    router-link(:to="{ name: 'home'}") Overview
                menu-item(name="Bills")
                    router-link(:to="{ name: 'people'}") Bills
                menu-item(name="Expenses")
                    router-link(:to="{ name: 'expenses'}") Expenses
                menu-item(name="Budge")
                    router-link(:to="{ name: 'Budge'}") Budge
                menu-item(name="Wallet")
                    router-link(:to="{ name: 'Wallet'}") Wallet
                menu-item(name="Documents")
                    router-link(:to="{ name: 'Documents'}") Documents
            div.content
                router-view
        footer.layout-footer-center 2011-2016 © TalkingData
</template>
