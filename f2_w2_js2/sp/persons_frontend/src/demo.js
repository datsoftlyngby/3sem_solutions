
// Some more cool reduce cases:
// Mapping with Reduce and the spread operator ...
// In this case our initial value is an empty array, and upon each iteration we can return an array with its previous value, plus the newest value added to the end of our array.
const people = [
    { id: "1", name: "Leigh", age: 35 },
    { id: "2", name: "Jenny", age: 30 },
    { id: "3", name: "Heather", age: 28 },
];
result = people.reduce((acc, person) => [...acc, person.name], []);
console.log('\n\n',result);

// Using the spread operator to turn a list of objects into an object of key,value entries
result = people.reduce((acc, person) => {
    return { ...acc, [person.name]: person };
}, {});

console.log('\n\n',result);

// recursive unpacking of nested arrays
const folders = [
    "index.js",
    ["flatten.js", "map.js"],
    ["any.js", ["all.js", "count.js"]],
  ];
  
  function flatten(acc, element) {
    if (Array.isArray(element)) {
      return element.reduce(flatten, acc);
    }
    return [...acc, element];
  }
  
  result = folders.reduce(flatten, []);
  console.log('\n\n',result);

// Template literals
let a = 5;
let b = 10;
console.log('\n\n',`A + B is ${a + b}
 and not ${2 * a + b}.`);
