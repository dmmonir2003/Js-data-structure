
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
  
  //constant time o(1)
  prepend(value){
    const node=new Node(value);
    if (this.isEmpty()) {
      this.head=node;
      
    } else {
      node.next=this.head;
      this.head=node;
      
    }
this.size++
  }
  
  //lenear time o(n)
  appand(value){
    const node =new Node(value)
    if(this.isEmpty()){
      this.head=node
    } else {
     let prev=this.head;
     while (prev.next) {
       // Tab to editnext
       prev=prev.next
     }
     prev.next=node
    }
    this.size++
  }
  
  
  insert(value,index)
  {
    if (index<0||index>this.size) {
      return
    }
    
    
    
  }
  
  print(){
    if (this.isEmpty()) {
      console.log('list is empty')
    } else {
    let currentNode=this.head;
    let listValues='';
    while (currentNode) {
      listValues+=`${currentNode.value  }-> `;
      currentNode=currentNode.next
    }
    listValues+='null'
      console.log(listValues)
    }
  }
}

const list =new linkdList();

console.log('list isEmty:', list.isEmpty());
console.log('list size : ', list.getSize())


//list.prepend(20);
//list.prepend(30);


list.appand(10);
list.appand(20);
list.appand(30);
list.print()
