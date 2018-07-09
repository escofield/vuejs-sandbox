<script lang="coffee" >
import VueTidyRoutes from 'vue-tidyroutes'

login =
    name: 'login'
    data: () ->
        credentials:
            userid: ''
            password: ''
    methods:
        login: () ->
            bself = this
            this.$store.dispatch 'auth/logIn', [this.$router, this.$data.credentials.userid, this.$data.credentials.password]
                .then (resolved) =>
                    this.$Message.info('You have successfully logged in.')
                ,(rejected) =>
                    this.$Notice.open this.$AppConfig.notice, ... { title: 'Authorization', desc: rejected }

VueTidyRoutes.route '/',
        name: 'login'
        component: login

export default login
</script>

<style scoped lang="stylus">
@import "../../ruby-theme/variables.styl"
.login
    display grid
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    

@media (min-width: $screen-sm)
    .login
        grid-template-columns: repeat(2, 1fr);

@supports (display: grid)
    .credentials
    .fancyImage
        width: auto
    .ivu-row:before
    .ivu-row:after
    .ivu-col:after
    .ivu-col:before
        content: none

.logo
    fill $primary-color
    width 150px
    margin-top 80px
    margin-bottom 150px
.loginButton
    margin-top: 50px
    margin-bottom 30px
    height 50px
    font-size 2em
.ivu-input-group-prepend
    .ivu-icon
        font-size 26px
.fancyImage
    background-image url("/static/login.PNG")
    background-repeat: no-repeat
    height: 900px
    background-size: cover
    background-position: center;
</style>

<template lang="pug" >
row.login(:gutter="30")
    i-col.credentials(span="12")
        svg-icon.logo(icon="logo")
        h1
            | Login to your account
        i-form(ref="credentials" :model="credentials")
            form-item(prop="userid")
                label(for="userid") Username or Email
                i-input(type="text", size="large" name="userid" v-model="credentials.userid")
                    icon(type="ios-person-outline" slot="prepend")
            form-item(prop="password")
                label(for="password") Password
                i-input(type="password", size="large" , name="password" v-model="credentials.password")
                    icon(type="ios-locked-outline" slot="prepend")
            i-button.loginButton(type="primary" v-on:click="login" long) Login
        h3
            | Want to work with Ruby? 
            router-link(:to="{ name: 'home'}") Signup!
    i-col.fancyImage(span="12")

</template>