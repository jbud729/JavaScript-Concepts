//9 Must Know JS Array Methods

//Splicing 
const numbers = [1,2,3,4,5];
const deleted = numbers.splice(2,0,6,7);
console.log(numbers);
console.log(deleted);


//Filter 
const items = [
  {name: 'Bike', price: 100 },
  {name: 'TV', price: 200 },
  {name: 'Album', price: 10 },
  {name: 'Book', price: 5 },
  {name: 'Phone', price: 500 },
  {name: 'Computer', price: 1000 },
  {name: 'Keyboard', price: 25 }
];
const filterItems = items.filter((item) => item.price <= 100 );
console.log(filterItems);


//Map - Take one array and convert it to a new array so all items 
//in array are going to look slightly diiferent
const itemNames = items.map((item) => item.name);
console.log(itemNames);

//Find 
const foundItem = items.find((item) => item.name === 'Book');
console.log(foundItem);

//forEach
items.forEach((item) => console.log(item.name));


//Some - returns only true or false 
const hasInexpensiveItems = items.some((item) => item.price <=100);
console.log(hasInexpensiveItems);

//Every - Very similar to some, but instead of checking for 1 item 
// to  fall under a condition, it checks to make sure every items falls
//under that conditon. 
const haveInexpensiveItems = items.every((item) => item.price <=100);
console.log(haveInexpensiveItems);


//Reduce 
const total = items.reduce((curentTotal, item) => item.price + curentTotal,
 0);
console.log(total);


//Includes - takes a single argument: Just checks if a value is in an array
const nums = [1,2,3,4,5];
const includesTwo = nums.includes(7); 
console.log(includesTwo);





















