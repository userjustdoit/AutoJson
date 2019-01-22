/**
 * @author userjustdoit
 * @des  入口js
 **/

function log(obj,isstr) {
    console.log(isstr?JSON.stringify(obj):obj);
    document.write(isstr?JSON.stringify(obj):obj);
    document.write("<br>");
};

import {Stack} from '@/texttojson/static/js/stack.js';
var text="a:{b:c,d:{e:f}}";
var stack=new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
log(stack,true);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
log(stack,true);