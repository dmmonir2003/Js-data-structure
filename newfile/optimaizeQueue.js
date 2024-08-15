class Queue{
  constructor(){
    this.items={}
    this.front=0;
    this.rear=0;
  }
  
  emqueue(item){
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