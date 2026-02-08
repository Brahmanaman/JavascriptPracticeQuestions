// JavaScript Practice Questions
// Basic Console Usage
// 1. Create two variables: one storing your full name and another storing your favorite hobby. Print:
// "My name is and ".
// let name = 'Aman Sharma';
// let hobby = 'travelling';
// console.log(`My name is ${name} and my hobby is ${hobby}`)

// 2. Perform the arithmetic calculation 45 * 2 - 10 and print the result.
// console.log(45 * 2 - 10)

// 3. Retrieve and print the current year using JavaScript’s Date object.
// let date = new Date();
// console.log(date.getFullYear())

// 4. Store your first name and last name separately and print your full name.
// let firstName = "Aman";
// let lastName = "Sharma";
// console.log(firstName + ' ' + lastName)

// 5. Create a variable, print it, update it, and print again.
// let data = "dummy data";
// console.log(data)
// data = "updated dummy data";
// console.log(data)

// 6. Print a custom error message using console.error().
// console.error("custom error message")

// 7. Store a number and print its square.
// let num = 25;
// console.log(Math.pow(num, 2))
// console.log(num * num)

// 8. Create a boolean variable and print it.
// let isbool = true;
// console.log(isbool)

// 9. Store your age and print whether it is greater than 18.
// let age = 25;
// if (age > 18) {
//     console.log("I am greater than 18")
// }
// else {
//     console.log("I am under 18")
// }

// 10. Divide 100 by 0 and print the result.
// console.log(100/0)

// Variables & Data Types
// 11. Create a variable using let and print it.
// let a = "created variable using let";
// console.log(a);


// 12. Declare a constant PI = 3.14 and print it.
// const PI = 3.14
// console.log(PI)

// 13. Create a variable, update it, and print again.
// let data = "dummy data";
// data = "updated dummy data";
// console.log(data)

// 14. Print typeof null.
// console.log(typeof null)

// 15. Store "25" in a variable and print its type.
// let num = "25"
// console.log(typeof num)

// 16. Create a boolean and print its type.
// let bool = true;
// console.log(typeof bool)

// 17. Create a string, number, and boolean. Print all together.
// let name = "Aman"
// let age = 25
// let isDeveloper = true;
// console.log("My name is " + name + " " + "and my age is " + age + " and I am " + (isDeveloper ? "developer" : "not developer"));

// 18. Declare a variable without value and print its type.
// let a;
// console.log(typeof a)

// 19. Create a variable with undefined and print its type.
// let a = undefined
// console.log(typeof a)

// 20. Create an array using const.
// const num = [1,2,3,4,5,6,7]
// - Print it
// console.log(num)
// - Try reassigning (observe error)
// num = [8,9,10]
// console.log(num)
// - Push a new value and print updated array.
// num.push(8)
// num.push(9)
//  console.log(num)

// Loops
// 21. Print numbers from 1 to 50 using for.
// for (let i = 1; i <= 50; i++) {
//     console.log(i);
// }
// 22. Using while, calculate sum from 1 to 10.
// let sum = 0;
// let i = 1;
// while (i <= 10) {
//     sum += i;
//     i++;
// }
// console.log(sum);

// 23. Use for...of to print each character of "JavaScript".
// for (const element of "JavaScript") {
//     console.log(element)
// }

// 24. Print odd numbers from 1–20 using continue.
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }
//     else {
//         console.log(i);
//     }
// }

// 25. Use do...while to print 5 to 1.
// let num = 5;
// do {
//     console.log(num)
//     num--;
// } while (num >= 1)

// 26. Calculate factorial of 5.
// let num = 5
// let fact = 1;
// while (num > 0) {
//     fact = fact * num;
//     num--;
// }
// console.log(fact)

// 29. Print numbers from 1–100 divisible by 5 using while.
// let num = 1;
// while (num <= 100) {
//     if (num % 5 == 0) {
//         console.log(num)
//     }
//     num++;
// }

// 30. Create object {name, age} and print keys using for...in.
// let name = {
//     name : "Aman",
//     age: 25
// }

// for (const key in name) {
//     console.log(key)
// }

// If–Else Conditionals
// 31. Store a number and check positive or negative.
// let num = 10;
// if (num < 0) {
//     console.log("negative")
// }
// else if(num > 0) {
//     console.log("positive")
// }
// else{
//     console.log("given input is not a number")
// }

// 32. Print Adult if age ≥18 else Minor.
// let age = 18
// if(age >= 18){
//     console.log("Adult")
// }
// else{
//     console.log("Minor")
// }

// 33. Check even or odd.
// let num = 17
// if(num % 2 === 0){
//     console.log("even")
// }
// else if(num % 2 !== 0){
//     console.log("odd")
// }

// 34. Find greater between two numbers.
// let num1 = 10
// let num2 = 20
// if(num1 > num2){
//     console.log("num1 is greater")
// }
// else if(num2 > num1){
//     console.log("num2 is greater")
// }
// else{
//     console.log("Both numbers are equal")
// }

// 35. Score grading:
// ≥90 Excellent
// ≥70 Good
// Else Needs Improvement
// let score = 20;
// if (score >= 90) {
//     console.log("Excellent")
// }
// else if(score >= 70){
//     console.log("Good");
// }
// else{
//     console.log("Needs Improvement")
// }

// 36. Check leap year.
// let currentYear = new Date().getFullYear();
// if (currentYear % 400 === 0) {
//     console.log("current year is a leap year")
// }
// else if (currentYear % 100 === 0) {
//     console.log("current year is not a leap year")
// }
// else if (currentYear % 4 === 0) {
//     console.log("current year is a leap year")
// }
// else {
//     console.log("current year is not a leap year")
// }

// 37. Check vowel or consonant.
// let char = "a";
// char = char.toLowerCase();
// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     console.log("vowel");
// }
// else if (char >= "a" && char <= "z") {
//     console.log("consonant");
// }
// else {
//     console.log("Not an alphabet");
// }

// 38. Find largest of three numbers.
// let num1 = 10
// let num2 = 50
// let num3 = 30
// if (num1 > num2 && num1 > num3) {
//     console.log(num1 + " is the largest")
// }
// else if (num2 > num1 && num2 > num3) {
//     console.log(num2 + " is the largest")
// }
// else if (num3 > num1 && num3 > num2) {
//     console.log(num3 + " is the largest")
// }
// else {
//     console.log("All numbers are equal")
// }

// 39. Password validation (admin123).
// let password = "admin123";
// let enteredPassword = "admin123";
// if (enteredPassword === password) {
//     console.log("Password is correct");
// }
// else {
//     console.log("Password is incorrect");
// }

// 40. Check divisibility by 3 and 5.
// let num = 15
// if(num % 3 == 0 && num % 5 == 0){
//     console.log("given number is divisible by 3 and 5")
// }
// else{
//     console.log("given number is not divisible by 3 and 5")
// }

// More Loop Basics
// 41. Sum from 1 to 100.
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum)

// 42. Print table of 5.
// for(let i = 1; i <= 10; i++){
//     console.log(`5 * ${i} = ${5 * i}`)
// }

// 43. Count even numbers between 1–50.
// let count = 0;
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 0) {
//         count++;
//     }
// }
// console.log(count)

// 44. Print 10 to 1.
// for(let  i = 10; i >= 1; i--){
//     console.log(i);
// }

// 45. Sum of even numbers from 1–20.
// let sum = 0
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         sum += i
//     }
// }
// console.log(sum)

// 46. Print squares from 1–10.
// for (let i = 1; i <= 10; i++) {
//     console.log(`square of ${i} = ${i * i}`)
// }


// 47. Count characters in "JavaScript".
// let count = 0;
// for (const element of "JavaScript") {
//     count++;
// }
// console.log(count)

// 48. Find largest in [3,7,2,9,5].
// let largest = [3, 7, 2, 9, 5]
// let num = 0;
// for (const element of largest) {
//     if (element > num) {
//         num = element
//     }
// }
// console.log(num)

// 49. Print pattern:
// *
// **
// ***
// ****
// *****

// for (let i = 1; i <= 5; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += "*";
//     }
//     console.log(pattern);
// }

// 50. Find sum of array:
// [10, 20, 30, 40]
// let arr = [10, 20, 30, 40];
// let sum = 0;
// for (const element of arr) {
//     sum = sum + element
// }

// console.log(sum)