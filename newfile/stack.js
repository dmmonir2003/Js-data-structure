/*
class Stack {
  constructor() {
    this.items = [];
  }
  
  push(item){
     this.items.push(item);
  }
  
  pop(){
    return this.items.pop();
  }
  
  peek(){
    
    if (this.items.length==0) {
      return null;
    }
    
    return this.items[this.items.length-1];
    
  }
  
  
  getSize(){
    return this.items.length;
  }
  
  isEmpty(){
    return this.getSize() === 0;
  }
  
  clear(){
    return this.items=[];
  }
  
  print(){
    for (let item of this.items) {
      // Tab to edit
      console.log(item)
    }
  }
}


const stack = new Stack();

stack.push('rohim');
stack.push('korim');
stack.push('Abdullah');
stack.push('monir');
stack.print()
console.log('after pop');
stack.pop();
console.log(stack.getSize(),'size')
console.log('isEmpty',stack.isEmpty());

stack.clear();
stack.print()


*/