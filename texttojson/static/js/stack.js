/**
 * @author userjustdoit
 * @des  js堆栈模拟
 **/

export class Stack {

    constructor(){
       this.Stack=new Array();
    }

    push(obj){
        this.Stack.unshift(1);
    }

    pop(){
       return this.Stack.pop();
    }

}