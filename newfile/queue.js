/*

class Queue{
  constructor(){
    this.items=[];
  }
  enqueue(item){
    this.items.push(item)
  }
  
  dequeue(){
    return this.items.shift()
  }
  
  isEmpty(){
    return this.items.length===0;
  }
  peek(){
    if (!this.isEmpty()) {
      return this.items[0];
   }
   
   return null;
   
  }
  
  size(){
    return this.items.length
  }
  
  print(){
    console.log(this.items.toString())
  }
  
}


const queue=new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print()

console.log(queue.dequeue())
console.log(queue.size())
console.log(queue.peek())

*/