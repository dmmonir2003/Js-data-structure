// set implement 

const set=new Set([1,2,3]);


// implement set building method

set.add(4);
set.has(4);
console.log(set.keys(),'key');
set.delete(1);



for (let i of set) {
  console.log(i);
};

set.clear()