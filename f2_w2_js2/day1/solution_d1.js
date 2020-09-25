// 1a Declare a JavaScript array and initialize it with some names (Hassan, Jan, Peter, Boline, Frederik etc.). Use the filter method to create a new array with only names that contains the letter ‘a’.
const names = ['Hassan','Jan','Peter','Boline'];
const a_names = names.filter(name=>name.includes('a'));
console.log(a_names);

// 1b) Using the map method: Use the names-array created above, and, using its map method, create a new array with all the characters in each name reversed.
const rev_names = names.map(name=>name.split('').reverse().join(''));
console.log(rev_names);

// 2a Implement a function: myFilter(array, callback)
const myFilter = (arr,callback)=>{
    const result = [];
    arr.forEach(element=>{
        if(callback(element)){
            result.push(element);
        }
    })
    return result;
}
console.log(myFilter(names,name=>name.includes('a')));

// 2b Implement a function: myMap(array, callback)that, provided an array and a callback, provides the same functionality as calling the existing map method on an array.
const myMap = (arr,callback)=>{
    const result = [];
    arr.forEach(element=>{
        result.push(callback(element));
    });
    return result;
}
console.log(myMap(names, name=>name.split('').reverse().join('')));

// 3a Given this array: var numbers = [1, 3, 5, 10, 11]; Use map + a sufficient callback to map numbers into this array:
numbers = [1, 3, 5, 10, 11];
let result = numbers.map((element,idx)=>{
    return element + numbers[idx+1] || element;
});
console.log(result);

// 3b) Use map() to create the <a>’s for a navigation set and eventually a string like below (use join() to get the string of <a>’s):
a_tags = names.map(element=>{
    return `<a href="${element}">${element}</a>`
});
result = `<nav>${a_tags.join('')}</nav>`
console.log(result);

// 3c) Use map()+(join + ..) to create a string, representing a two column table, for the data given below:
persons = [{name:"Hassan",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Boline", phone: "79345"}];
trs = persons.map(person=>`<tr><td>${person.name}</td><td>${person.phone}</td></tr>`);
headers = Object.keys(persons[0]);
ths = headers.map(header=>`<th>${header}</th>`).join('');
result = `<table><thead><tr>${ths}</tr></thead><tbody>${trs.join('')}</tbody></table>`;
console.log(result);

// 4a reduce
var all= ["Hassan", "Peter", "Carla", "Boline"];
result = all.join('#');
console.log(result);

// 4b Given this array: var numbers = [2, 3, 67, 33]; Create a reducer callback that, with reduce(..),  will return the sum (105) of all values in numbers
numbers = [2, 3, 67, 33];
result = numbers.reduce((x,y)=>x+y);
console.log(result);

// 4c get average age
const members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}]
result = members.reduce((accu, current)=>accu+current.age,0)/members.length;
console.log(result);

// 4d d) Extra Imagine you were to create a system that could count votes for the presidential election in the USA. Given this array of votes: var votes = [ "Biden","Trump","Biden","Biden","Trump","Trump","Biden","None"]; Create a reduce function that will return a single object like {Clinton: 3, Trump: 4, None: 1 }
console.log('4d');
const votes = [ "Biden","Trump","Biden","Biden","Trump","Trump","Biden","None"];
result = votes.reduce((accu, candidate)=>{
    accu[candidate] = accu[candidate]? accu[candidate] + 1: 1;
    return accu;
},{});
console.log(result);
