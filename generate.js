var fs = require('fs')
var shell = require('shelljs')

var [ , , fileType, name, ...options] = process.argv
if(fileType == undefined){
    console.log('Usage: [fileType - component|service] [name] [options - routable 4files|script]')
    console.log('  component:  can be routable, this includes special tidyroute info in the component')
    console.log('  component vue structure allows for one file, or split up.')
    console.log('    4files to split out all files into individual ones')
    console.log('    script to split out only the script file')
    console.log('    otherwise all contents are contained in the single .vue file')
    console.log('    when chosing any option to split out files, all files are placed into a subdirectory')

    return
}
var generateRoutableScriptFile = () => {
    return `import VueTidyRoutes from 'vue-tidyroutes'\r\n\r\n`
            + `${name} =\r\n`
            + `    name: '${name}'\r\n`
            + `    data: () ->\r\n`
            + `        msg: 'some data'\r\n\r\n`
            + `VueTidyRoutes.route '/${name}',\r\n`
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
var control = {
    'component': () => {
        var templateFile = `<div class="${name}">\r\n    Hello World from ${name} component\r\n</div>`
        var styleFile = `.${name} \{\}`
        var vueFilename = `${__dirname}\\src\\components${scriptTypeFolder()}\\`
        var vueFileSrcs = {t:'',s:'',c:''}
        var vueTagBody = {t:'',s:'',c:''}
        if(options.includes('4files') || options.includes('script')){
            vueFilename = `${vueFilename}\\${name}\\`
            var vueSubitemsDir = `${__dirname}\\src\\components${scriptTypeFolder()}\\${name}\\`
            try { shell.mkdir('-p',vueSubitemsDir) } catch (e) {;}
            if(options.includes('4files')){
                vueFileSrcs.t = `src="./${name}.vue.html"`
                vueFileSrcs.s = `src="./${name}.vue.coffee"`
                vueFileSrcs.c = `src="./${name}.vue.scss"`
                fs.writeFileSync(vueSubitemsDir + `${name}.vue.scss`,styleFile)
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
                        + `\r\n<style lang="scss" ${vueFileSrcs.c}>${vueTagBody.c}</style>\r\n`
                        + `\r\n<template ${vueFileSrcs.t}>${vueTagBody.t}</template>`
        fs.writeFileSync(`${vueFilename}\\${name}.vue`,vueFile)
    },
    'service': () => {
        var servicesDir = `${__dirname}\\src\\services`
        try { fs.mkdirSync(`${__dirname}\\src\\services`) } catch (e) {;}
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
        try { fs.mkdirSync(`${__dirname}\\src\\models`) } catch (e) {;}
        var scriptFile = `class ${name} \r\n`
        + `     @classVariable: 'this is my class variable'\r\n\r\n`
        + `     constructor: () ->\r\n`
        + `         @classVariable = 'something new'\r\n\r\n`
        + `     getValue: () -> @classVariable\r\n\r\n`
        fs.writeFileSync(modelsDir + `\\${name}.coffee`,scriptFile)
    }
}
control[fileType]()