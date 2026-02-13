// 1. Write a function that uses `forEach()` to calculate the total sum of an array.
// function totalSum(arr){
//     let sum = 0
//     arr.forEach((elem)=>{
//         sum = sum+elem;
//     })
//     return sum;
// }
// let arr = [1,2,3,4,5,6,7,8,9,20]
// console.log(totalSum(arr))


// 2. Write a function that uses `map()` to return a new array where each number is squared.
// function squaredArray(arr){
//     let result = arr.map((ele)=>{
//         return ele * ele;
//     })
//     return result
// }
// let arr = [1,2,3,4,5,6,7,8,9,20]

// console.log(squaredArray(arr))


// 3. Write a function that uses `filter()` to return only numbers greater than 50.
// function numberGreaterThan50(arr){
//     let result = arr.filter((elem)=>{
//         return elem > 50;
//     })
//     return result;
// }
// let arr = [10,20,30,40,50,6,70,80,90,20]

// console.log(numberGreaterThan50(arr))


// 4. Write a function that checks whether two values are strictly equal using `===`.
// let a = 10
// let b = '10'

// if(a===b){
//     console.log('a and b is equal')
// }
// else{
//     console.log('a and b is not equal')
// }


// 5. Write a function that demonstrates array mutability by modifying the original array using `push()`.
// function arrayMutability(arr){
//     arr.push(5)
//     arr.push(6)

// }
// let arr1 = [1,2,3,4]
// console.log("arr1 before mutability")
// console.log(arr1)

// arrayMutability(arr1)

// console.log("arr1 after mutability")
// console.log(arr1)


// 6. Write a function that removes the last element immutably (without modifying original array).
// function removeLastElement(arr){
//     return arr.slice(0,-1)
// }

// let arr1 = [1,2,3,4,5,6];
// let arr2 = removeLastElement(arr1)

// console.log(arr1)
// console.log(arr2);



// 7. Write a function that sorts numbers in ascending order using a proper compare function.
// function sortInAscending(arr){
//     return arr1.sort((a,b) => a-b);
// }

// let arr1 = [10,2,3,40,5,60];
// console.log(sortInAscending(arr1))


// 8. Write a function that sorts strings alphabetically.
// function sortStrings(arr) {
//     return arr.sort();
// }

// let fruits = ["banana", "apple", "mango"];

// console.log(sortStrings(fruits));


// 9. Write a function that reverses an array without using `reverse()`.
// function reverseAnArray(arr1){
//     let arr2 = [];
//     for(let i = arr1.length-1; i >= 0; i--){
//         arr2.push(arr1[i])  
//     }
//     return arr2;
// } 
// let arr1 = [10,2,3,40,5,60];
// console.log("reversed array ", reverseAnArray(arr1))


// 10. Write a function that merges two arrays using `concat()` and returns the result.
// function mergeTwoArrays(arr1, arr2){
//     return arr1.concat(arr2);
// }
// let arr1 = [1,2,3,4,5,6]
// let arr2 = [7,8,9,10]

// let result = mergeTwoArrays(arr1, arr2)
// console.log(result);



// 11. Write a function that merges two arrays and removes duplicate values.
// function mergeAndRemoveDuplicates(arr1, arr2){
//     let arr = []; 
//     let result = arr1.concat(arr2);
//     result.forEach(element => {
//         if(!arr.includes(element)){
//             arr.push(element)
//         }
//     });

//     return arr;

//     // return [... new Set([...arr1, ...arr2])] //optimized approach
// }

// let arr1 = [1,2,3,4]
// let arr2 = [1,2,3,5]
// console.log(mergeAndRemoveDuplicates(arr1, arr2))


// 12. Write a function that manually checks whether a value exists in an array (without using `includes()`).
// function valueExist(arr1, value){
//     return arr1.some((elem) => elem === value);
// }

// let arr1 = [1,2,3,4,5,6];
// let val = 6;
// console.log(valueExist(arr1, val))


// 13. Write a function that uses `includes()` to check if an array contains a specific value.
// function valueExist(arr1, value){
//     return arr1.includes(value);
// }

// let arr1 = [1,2,3,4,5,6];
// let val = 7;
// console.log(valueExist(arr1, val))


// 14. Write a function that filters strings starting with "A" using `startsWith()`.
// let names = ["aman", "Pawan", "Anand", "Rahul"]
// let arr = []
// names.forEach((elem) =>{
//     if(elem.startsWith("A")){
//         arr.push(elem)
//     }
// })
// console.log(arr)


// 15. Write a function that uses `find()` to return the first number greater than 100.
// function greaterThan(arr, value){
//     return arr.find((elem) => elem > value)
// }

// let arr = [100, 50, 10 , 40, 200, 60, 500]
// console.log(greaterThan(arr, 100))


// 16. Create an object and write a function that returns all its keys using a loop.

// function returnKeys(obj){
//     let arr  = []
//     for (let key in obj) {
//         arr.push(key)
//     }
//     return arr;
// }


// let user = {
//     id: 1,
//     name: "Aman Sharma",
//     age: 25,
//     email: "aman@example.com",
//     isActive: true
// };

// console.log(returnKeys(user));


// 17. Write a function that adds a new property to an object immutably.
// function addPropertyToAnObject(obj, key, value){
//     obj[key] = value;
//     return obj;
// }

// let user = {
//     id: 1,
//     name: "Aman Sharma",
//     age: 25,
//     email: "aman@example.com",
//     isActive: true
// };

// console.log(addPropertyToAnObject(user, 'inRelationShip', false))


// 18. Write a function that updates a property in an object.
// function updatePropertyToAnObject(obj, key, value){
//     obj[key] = value;
//     return obj;
// }

// let user = {
//     id: 1,
//     name: "Aman Sharma",
//     age: 25,
//     email: "aman@example.com",
//     isActive: true
// };

// console.log(updatePropertyToAnObject(user, 'name', 'pawan sharma'))


// 19. Write a function that checks whether a specific key exists inside an object.
// function findKey(obj, val){
//     for (let key in obj) {
//         if(key == val){
//             return true;
//         }
//     }
//     return false;
// }


// let user = {
//     id: 1,
//     name: "Aman Sharma",
//     age: 25,
//     email: "aman@example.com",
//     isActive: true
// };
// console.log(findKey(user, 'age'));


// 20. Write a function that converts an object into an array of key-value pairs.
// function convertObjectIntoKeyValuePair(obj){
//     return Object.entries(obj)
// }

// let user = {
//     id: 1,
//     name: "Aman Sharma",
//     age: 25,
//     email: "aman@example.com",
//     isActive: true
// };

// console.log(convertObjectIntoKeyValuePair(user))
