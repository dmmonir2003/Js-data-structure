const obj ={
  firstName:'monir',
  age:12,
  getName:function() {
    this.firstName+this.lastName
    
  },
  "address":'rohimpur',
}

obj.lastName="Hossain";
console.log(obj["address"]);
obj.getName();
delete obj["address"];
obj.keys();
obj.values();



// access o(1)
// delete o(1)
// insert o(1)


//search o(n)
// object.keys() o(n)
// object.values() o(n)
// object.entries() o(n)
