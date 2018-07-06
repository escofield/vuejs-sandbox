<script lang="coffee">
export default
    name: 'App'
    created: () ->
        this.$store.dispatch 'persons/fetchPeople'  
</script>
<style scoped lang="stylus">
.layout
    border 1px solid #d7dde4
    background #f5f7f9
    position relative
    border-radius 4px
    overflow hidden

.layout-logo
    width 100px
    height 30px
    background #5b6270
    border-radius 3px
    float left
    position relative
    top 15px
    left 20px

.layout-nav
    width 420px
    margin 0 auto
    margin-right 20px

.layout-footer-center
    text-align center

</style>
<template lang="pug">
   .layout
      layout
        header
            i-menu(mode="horizontal" theme="dark" active-name="1")
                .layout-logo
                .layout-nav    
                    menu-item(name="1")
                        icon(type="ios-keypad")
                        router-link(:to="{ name: 'home'}") Home
                    menu-item(name="2")
                        icon(type="ios-paper")
                        router-link(:to="{ name: 'people'}") People
        content(:style="{padding: '0 50px'}")
          breadcrumb(:style="{margin: '20px 0'}")
            breadcrumbitem Home
            breadcrumbitem Components
            breadcrumbitem Layout
          card
            div(style="min-height: 200px;")
              router-view
        footer.layout-footer-center 2011-2016 © TalkingData
</template>
