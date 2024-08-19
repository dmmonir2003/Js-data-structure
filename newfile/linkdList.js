class Node {
  constructor(value) {
    this.value=value;
    this.next=null
  }
}

class linkdList {
  constructor() {
    this.head=null;
    this.size=0
  }
  
  isEmpty(){
    return this.size===0;
  }
  
  getSize(){
    return this.size
  }
  
  prepend(value){
    const node=new Node(value);
    if (this.isEmpty()) {
      this.head=node;
      this.size++
    } else {
      this.next=this.head;
      this.head=node;
      this.size++
    }
    
  }
}

const list =new linkdList();

console.log('list isEmty:', list.isEmpty());
console.log('list size : ', list.getSize())