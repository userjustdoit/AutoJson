'use strict'
/**
 * @author userjustdoit
 * @des
 **/
const config = require('../config')
const path = require('path')

exports.assetsPath = function (_path) {
    const assetsSubDirectory =config.dev.assetsSubDirectory;

    return path.posix.join(assetsSubDirectory, _path)
}

// glob是webpack安装时依赖的一个第三方模块，还模块允许你使用 *等符号, 例如lib/*.js就是获取lib文件夹下的所有js后缀名的文件
var glob = require('glob')
var PAGE_PATH = path.resolve(__dirname, '../src/pages')
var HtmlWebpackPlugin = require('html-webpack-plugin')

//多入口配置
// 通过glob模块读取pages文件夹下的所有对应文件夹下的js后缀文件，如果该文件存在
// 那么就作为入口处理
exports.entries = function() {
    var entryFiles = glob.sync(PAGE_PATH + '/*/main.js')
    var map = {}
    entryFiles.forEach((filePath) => {
        var filename = filePath.substring(filePath.lastIndexOf('pages')+6, filePath.lastIndexOf('\/'))
        map[filename] = filePath
    })
    return map
}

//多页面输出配置
// 与上面的多页面入口配置相同，读取pages文件夹下的对应的html后缀文件，然后放入数组中
exports.htmlPlugin = function() {
    let pages = glob.sync(PAGE_PATH + '/*')
    let arr = []
    let templateDefault=PAGE_PATH + '/index.html';
    let pageIndex=0;
    pages.forEach((filePath) => {
        let pagename = filePath.substring(filePath.lastIndexOf('pages') + 6)
        if(pagename!='index.html') {
            if(pagename=='index'){
                //保留了index这个页面名做索引页故不能再页面名称为index
                console.error('>>>>>>>>>>>>>ERR:page name index is Not support!>>>>>>>>>>>>>');
                return;
            }
            let templatePath = templateDefault;
            let templateCustom=glob.sync(filePath + '/index.html');
            if(templateCustom.length>0){//新建了index.html则使用新建的,否则使用默认的模板/pages/index.html
                templatePath=templateCustom[0];
            }
            console.log(`>>>>> add page ${++pageIndex}:${pagename} \r\n`);
            let conf=this.getHtmlWebpackPlugin(templatePath,`${pagename}/index.html`,pagename);
            arr.push(new HtmlWebpackPlugin(conf))
        }
    });

    return arr
}

exports.getHtmlWebpackPlugin=function (template,filename,chunkName,confExt) {
    let conf = {
        // 模板来源
        template: template,
        // 文件名称
        filename: filename,
        // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
        chunks: ['manifest', 'vendor', chunkName],
        inject: true,
        staticPath:"../static",
    }
    for(let key in confExt){
        conf[key]=confExt[key];
    }
    return conf;
}