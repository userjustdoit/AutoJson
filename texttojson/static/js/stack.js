/**
 * @author userjustdoit
 * @des  js堆栈模拟
 **/

export class Stack {

    constructor(){
       this.Stack=new Array();
    }

    push(obj){
        this.Stack.unshift(obj);
    }

    pop(){
       return this.Stack.pop();
    }

}