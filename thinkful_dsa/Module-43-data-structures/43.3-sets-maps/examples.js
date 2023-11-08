const numbers = new Set();
numbers.add(5).add(3).add(2)
// console.log(numbers);

// for(let i = 0; i<numbers.size; i++){
//   console.log(Array.from(numbers.values())[i])
// }

for(let num of numbers.values()){
  // console.log(num);
}

const word = "Data Structures";
const set = new Set(word.toLowerCase());
// console.log(set);


/* Maps */

const abObj = {};
const addressBook = new Map();

abObj.name = "Rob";
abObj.age = 30;
abObj.favColor = "Blue";
abObj.sport = "Basketball";

// console.log(abObj)

for(const key in abObj){
  // console.log({key, value: abObj[key]})
}

// addressBook.set("name", "Rob");
// addressBook.set("favColor", "Blue");
addressBook.set("sherlock", {
  email: "holmes@scotlandyard.com",
  address: "221B Baker Street, London"
})

addressBook.set("hercule", {
  email: "poirot@scotlandyard.com",
  address: "Flat 203 at 56B Whitehaven Mansions",
});

Array.from(addressBook.entries()).map(entry=>{
  console.log('entry',entry)
});


for(const x of addressBook.keys()){
  console.log(x)
}
