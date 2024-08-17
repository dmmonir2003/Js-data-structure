/*
class Queue{
  constructor(){
    this.items={}
    this.front=0;
    this.rear=0;
  }
  
  enqueue(item){
    this.items[this.rear]=item;
    this.rear++
  }
  
  dequeue(){
    const item=this.items[this.front]
    delete this.items[this.front]
    this.front++;
    return item
  }

  isEmpty(){
    return this.rear-this.front===0
  }
  
  peek(){
    
    return this.items[this.front]
    
  }


  size(){
    return this.rear-this.front 
  }
  
  print(){
    console.log(this.items)
  }

}

const queue =new Queue()
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.print()

queue.dequeue()

console.log(queue.peek())

console.log(queue.size())
queue.enqueue(40)
console.log(queue.peek())
queue.print()

*/