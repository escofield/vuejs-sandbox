// run as node generate [filetype] [name] [options...]
var fs = require('fs')
var shell = require('shelljs')

var [ , , fileType, name, ...options] = process.argv

var generateRoutableScriptFile = () => {
    return `import VueTidyRoutes from 'vue-tidyroutes'\r\n\r\n`
            + `${name} =\r\n`
            + `    name: '${name}'\r\n`
            + `    data: () ->\r\n`
            + `        msg: 'some data'\r\n\r\n`
            + `    computed:\r\n`
            + `        isAuthorized: () ->\r\n`
            + `            this.$store.getters['auht/isAuthorized']\r\n`
            + `    beforeRouteEnter: (to, from, next) ->\r\n`
            + `       next (vm) ->\r\n`
            + `          vm.$store.dispatch 'auth/valdateAuth', [vm.$router, vm.$route]\r\n`
            + `\r\nVueTidyRoutes.route '/${name}',\r\n`
            + `        name: '${name}'\r\n`
            + `        component: ${name}\r\n\r\n`
            + `export default ${name}`
}
var generateWidgetScriptFile = () => {
    return  `export default \r\n`
            + `     name: '${name}'\r\n`
            + `     data: () ->\r\n`
            + `         msg: 'some data'`
}
var generateScriptFile = () => {
    if(options.includes('routable')){
        return generateRoutableScriptFile()
    }
    return generateWidgetScriptFile()
}
var scriptTypeFolder = () => {
    if(options.includes('routable')){
        return '\\routes'
    }
    return '\\widgets'
}
var generateScriptTypeIndex = () => {
    if(options.includes('routable')){
        if(!fs.existsSync(`${__dirname}\\src\\components\\routes\\index.coffee`)){
            fs.writeFileSync(`${__dirname}\\src\\components\\routes\\index.coffee`,
                 `# File imports for routes.  Import your route here!\r\n`
                +`import Vue from 'vue'\r\n`
                +`import VueRouter from 'vue-router'\r\n`
                +`import VueTidyRoutes from 'vue-tidyroutes'\r\n\r\n`
                +`import '@/components/routes/${name}'\r\n\r\n`
                +'Vue.use(VueRouter)'
            )
        }
    }else{
        if(!fs.existsSync(`${__dirname}\\src\\components\\widgets\\index.coffee`)){
            fs.writeFileSync(`${__dirname}\\src\\components\\widgets\\index.coffee`,
                 `# File imports for widgets.  Import your widgets(sub components) here!\r\n`
                +`import Vue from 'vue'\r\n\r\n`
                +`import ${name} from '@/components/widgets/${name}'\r\n\r\n`
                +`Vue.component('${name}', ${name})`
            )
        }
    }
}
var control = {
    'component': () => {
        var templateFile = `.${name} Hello World from ${name} component\r\n`
        var styleFile = `@import "../../ruby-theme/variables.styl"\r\n.${name} \{\}`
        var vueFilename = `${__dirname}\\src\\components${scriptTypeFolder()}\\`
        var vueFileSrcs = {t:'',s:'',c:''}
        var vueTagBody = {t:'',s:'',c:''}
        try { shell.mkdir('-p',vueFilename) } catch (e) {;}
        if(options.includes('4files') || options.includes('script')){
            vueFilename = `${vueFilename}\\${name}\\`
            var vueSubitemsDir = `${__dirname}\\src\\components${scriptTypeFolder()}\\${name}\\`
            try { shell.mkdir('-p',vueSubitemsDir) } catch (e) {;}
            if(options.includes('4files')){
                vueFileSrcs.t = `src="./${name}.vue.html"`
                vueFileSrcs.s = `src="./${name}.vue.coffee"`
                vueFileSrcs.c = `src="./${name}.vue.styl"`
                fs.writeFileSync(vueSubitemsDir + `${name}.vue.styl`,styleFile)
                fs.writeFileSync(vueSubitemsDir + `${name}.vue.html`,templateFile)
            }else if(options.includes('script')){
                vueFileSrcs.s = `src="./${name}.vue.coffee"`
                vueTagBody.t = `\r\n${templateFile}\r\n`
                vueTagBody.c = `\r\n${styleFile}\r\n`
            }
            fs.writeFileSync(vueSubitemsDir + `${name}.vue.coffee`,generateScriptFile())
        }else{
            vueTagBody.t = `\r\n${templateFile}\r\n`
            vueTagBody.c = `\r\n${styleFile}\r\n`
            vueTagBody.s = `\r\n${generateScriptFile()}\r\n`
        }
        var vueFile = `<script lang="coffee" ${vueFileSrcs.s}>${vueTagBody.s}</script>\r\n`
                        + `\r\n<style lang="stylus" ${vueFileSrcs.c}>${vueTagBody.c}</style>\r\n`
                        + `\r\n<template lang="pug" ${vueFileSrcs.t}>${vueTagBody.t}</template>`
        fs.writeFileSync(`${vueFilename}\\${name}.vue`,vueFile)
        generateScriptTypeIndex()
    },
    'service': () => {
        var servicesDir = `${__dirname}\\src\\services`
        try { fs.mkdirSync(servicesDir) } catch (e) {;}
        if(!fs.existsSync(`${__dirname}\\src\\services\\index.coffee`)){
            fs.writeFileSync(`${__dirname}\\src\\services\\index.coffee`,
                `# File imports for services.  Import your services here!\r\n`
                +`import Vue from 'vue'\r\n`
                +`import injector from 'vue-inject'\r\n\r\n`
                +`import '@/services/${name}.coffee'\r\n`
            )
        }
        var scriptFile = `import injector from 'vue-inject'\r\n\r\n`
        + `class ${name} \r\n`
        + `     @classVariable: 'this is my class variable'\r\n\r\n`
        + `     constructor: () ->\r\n`
        + `         @classVariable = 'something new'\r\n\r\n`
        + `     getValue: () -> @classVariable\r\n\r\n`
        + `injector.service '${name}', ${name}\r\n`
        fs.writeFileSync(servicesDir + `\\${name}.coffee`,scriptFile)
    },
    'model': () => {
        var modelsDir = `${__dirname}\\src\\models`
        try { fs.mkdirSync(modelsDir) } catch (e) {;}
        var scriptFile = `class ${name} \r\n`
        + `     @classVariable: 'this is my class variable'\r\n\r\n`
        + `     constructor: () ->\r\n`
        + `         @classVariable = 'something new'\r\n\r\n`
        + `     getValue: () -> @classVariable\r\n\r\n`
        fs.writeFileSync(modelsDir + `\\${name}.coffee`,scriptFile)
    },
    'module': () => {
        var modulesDir = `${__dirname}\\src\\store`
        try { fs.mkdirSync(modulesDir) } catch (e) {;}
        modulesDir = modulesDir + '\\modules'
        try { fs.mkdirSync(modulesDir) } catch (e) {;}
        if(!fs.existsSync(`${__dirname}\\src\\store\\index.coffee`)){
            fs.writeFileSync(`${__dirname}\\src\\store\\index.coffee`,
                `# File imports for store modules.  Import your modules here!\r\n`
                +`import Vue from 'vue'\r\n`
                +`import Vuex from 'vuex'\r\n\r\n`
                +`import ${name} from '@/store/modules/${name}.coffee'\r\n\r\n`
                +`Vue.use(Vuex)\r\n\r\n`
                +`export default new Vuex.Store\r\n`
                +`    strict: true`
                +`    modules:\r\n`
                +`        ${name}: ${name}\r\n`
            )
        }
        try { fs.mkdirSync(modulesDir) } catch (e) {;}
        var scriptFile = `export default \r\n`
                        + `         namespaced: true\r\n`
                        + `         state:\r\n`
                        + `            first: ''\r\n`
                        + `            last: ''\r\n`
                        + `         getters:\r\n`
                        + `            fullname: (state) -> "#{state.first} #{state.last}"\r\n`
                        + `         mutations:\r\n`
                        + `            updatefirst: (state, first) ->\r\n`
                        + `                state.first = first\r\n`
                        + `         actions:\r\n`
                        + `            firstupdate: (context, first) ->\r\n`
                        + `                context.commit('updatefirst', first)\r\n`
        fs.writeFileSync(modulesDir + `\\${name}.coffee`,scriptFile)
    },
    'filter': () => {
        var filterDir = `${__dirname}\\src\\filters`
        try { fs.mkdirSync(filterDir) } catch (e) {;}
        if(!fs.existsSync(`${filterDir}\\index.coffee`)){
            fs.writeFileSync(`${filterDir}\\index.coffee`,
                `# File imports for store modules.  Import your modules here!\r\n`
                +`import './${name}.coffee'\r\n\r\n`
            )
        }
        var scriptFile = `import Vue from 'vue'\r\n`
                        + `Vue.filter '${name}', (value) ->\r\n`
                        + `     if value?\r\n`
                        + `         value = value.toString()\r\n`
                        + `         value = value.charAt(0).toUpperCase() + value.slice(1)\r\n`
                        + '     return value\r\n'
        fs.writeFileSync(filterDir + `\\${name}.coffee`,scriptFile)        
    }
}

if(fileType == undefined || control[fileType] == undefined){
    console.log('Usage: [fileType - component|service|model|module|filter] [name] [options - routable 4files|script]')
    console.log('  component:  can be routable, this includes special tidyroute info in the component')
    console.log('  component vue structure allows for one file, or split up.')
    console.log('    4files to split out all files into individual ones')
    console.log('    script to split out only the script file')
    console.log('    otherwise all contents are contained in the single .vue file')
    console.log('    when chosing any option to split out files, all files are placed into a subdirectory')
    console.log('  model: models are coffescript classes')
    console.log('  module: adds namespaced state management')
    console.log('  filter: adds a global filter')
    return
}else{
    control[fileType]()
}
