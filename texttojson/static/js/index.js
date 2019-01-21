/**
 * @author userjustdoit
 * @des
 **/

function log(obj,isstr) {
    console.log(isstr?JSON.stringify(obj):obj);
    document.write(isstr?JSON.stringify(obj):obj);
    document.write("<br>");
};

import {Stack} from './stack.js';
var text="a:{b:c,d:{e:f}}";
var stack=new Stack();
log(stack);