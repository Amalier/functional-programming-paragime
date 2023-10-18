// The point of this assignment is not to use the functional elements that are part of your chosen language (JavScript/Python).
// But, rather, implement the functionality from scratch using pure functions and higher level functions.
// Do the implimentation in order as given. 
// We have linked to info at MDN, this is just to give a sence of how the reduce,forEach,map and filter functions should work.
//
// 🛠️ Prerequisite:
// You must create an array persons that will contain the data from https://raw.githubusercontent.com/MM-203/misc/main/data/data.json
// This must be done before the first task
// This must be done before the first task

const persons = [
    { "name": "Paula Key", "age": 23 },
    { "name": "Riya Dickerson", "age": 99 },
    { "name": "Layne Colon", "age": 53 },
    { "name": "Pranav Giles", "age": 51 },
    { "name": "Kamryn Davis", "age": 27 },
    { "name": "Taniyah Yu", "age": 17 },
    { "name": "Brendon Porter", "age": 23 },
    { "name": "Jordin Hancock", "age": 86 },
    { "name": "Shawn Vargas", "age": 88 },
    { "name": "Sawyer Copeland", "age": 14 },
    { "name": "Gustavo Baldwin", "age": 7 },
    { "name": "Renee Wilson", "age": 29 }
]
// ----------------------------------------------------------------------------------------------------------------------------------
// Bonus challenge 🎉 (a bit hard), the functions forEach, filter and map can all be created using the function reduce. 
// If you feel up for a challenge, try doing so. NB! The bonus challenge is optional. 
// ----------------------------------------------------------------------------------------------------------------------------------

// 1
// Implement your own reduce function and count the number of people above the age of 50
// You can read about a reduce function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce 


function myReduce(array, callbackFn, startingValue = null) {
    let result = startingValue;
    for (let i = 0; i < array.length; i++) {
        result = callbackFn(result, array[i]);
    }
    return result;
}

function peopleOver50(accumulator, persons) {
    if (persons.age > 50) {
        return accumulator + 1;
    } else {
        return accumulator
    }
}
const numberOfPeopleOver50 = myReduce(persons, peopleOver50, 0);
console.log(`number of people over 50: ${numberOfPeopleOver50}`);


// Implement your own forEach function and use it to greet all the people in the persons array (say Hi, persons name).
// Read about forEach https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
function myForEach(array, callbackFn) {
    for (let i = 0; i < array.length; i++) {
        callbackFn(array[i])
    }

}


function greetPersons(persons) {
    console.log(`Hello, ${persons.name}`)
}
myForEach(persons, greetPersons);


// 3
// Implement your own map function and make everyone a year older.
// You can read about what the map function should do https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 

function myMap(array, callbackFn) {
    for (let i = 0; i < array.length; i++) {
        array[i] = callbackFn(array[i]);
    }

    return array;
}

function increaseAge(persons) {
    persons.age++;
    return persons;
}

const updatedAge = myMap(persons, increaseAge);
console.log(updatedAge);
// 4
// Implement your own filter function, and use it to find evryone under the drinking age.
// Read about filter https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

//-----------------REUSING My Reduce Function-------------------------------
function peopleUnder18(accumulator, persons, underDrinkingAge = 17) {
    if (persons.age < underDrinkingAge) {
        return accumulator + 1;
    } else {
        return accumulator
    }
}

let numberOfPeopleOver18WithReduce = myReduce(persons, peopleUnder18, 0);
console.log(`number of people under 18: ${numberOfPeopleOver18WithReduce}`)

//------------------Making New Filter Function---------------------------

/*
function myFilter(array, callbackFn) {
    const filter = [];
    for (let i = 0; i < array.length; i++) {
        if (callbackFn(array[i])) {
            filter.push(array[i]);
        }
    }
    return filter;

}

function isUnder18(person) {
    return person.age < 18;
}

let numberOfPeopleOver18 = myFilter(persons, peopleUnder18)
console.log(`people under 18: ${numberOfPeopleOver18}`)
*/

// Now create a function sum, that takes a list of numbers and returns the sum
// Try to use your previously created functions to make this function 
// Sum the total age of persons using this new function 
// NB! Do not manualy create the age listing

function sum(numbers) {
    return myReduce(numbers, (accumulator, value) => accumulator + value, 0);
}
function getAge(person) {
    return person.age;
}

const ages = myMap(persons, getAge);
const totalAge = sum(persons);

console.log(`Total age of persons: ${totalAge}`);

// Now create a function average, that returns the average of a list of numbers
// Try to use your previously created functions to make this function 
// calculate the average age of the persons using this function
// NB! Do not manualy create the age listing

function avg(numbers) {
    const sum = myReduce(numbers, (accumulator, value) => accumulator + value, 0);
    const average = sum / numbers.length;
    return average;
}

const averageAge = avg(ages)
console.log(`Average age of persons: ${averageAge}`)

// Finaly create a max and a min function that respectivly returns the maximum value and the minimum value
// Only use previously created functions to acchive this.
// Then find the min and max age of ther persons.

function maximum(numbers) {
    return myReduce(numbers, (max, value) => Math.max(max, value));
}
function minimum(numbers) {
    return myReduce(numbers, (min, value) => Math.min(min, value));
}

const maxAge = maximum(ages);
const minAge = minimum(ages);

console.log(`Maximum age: ${maxAge}`);
console.log(`Minimum age: ${minAge}`);