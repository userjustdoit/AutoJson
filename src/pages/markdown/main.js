/**
 * @author userjustdoit
 * @des  入口js
 **/

import {log} from '@/es6js/util/util.js';

var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
var result = md.render('| Option | Description |\n' +
    '| ------ | ----------- |\n' +
    '| data   | path to data files to supply the data that will be passed into templates. |');
log(result);