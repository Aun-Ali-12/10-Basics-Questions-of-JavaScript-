// //Declare a variable age and assign it your age. Check if age is a number using typeof.
let age = 20;
console.log(typeof age); //Yes number

// //2. Create an array numbers with values [10, 20, 30, 40, 50]. Use a for loop to print each number multiplied by 2.
const firstArr = [10, 20, 30, 40, 50];
for (i = 0; i < firstArr.length; i++) {
  console.log(firstArr[i] * 2);
}

// //3. Given an array fruits = ["apple", "banana", "mango"], use a for...of loop to print each fruit in uppercase.
const arrFruit = ["apple", "banana", "mango"];
for (const element of arrFruit) {
  console.log(element.toUpperCase());
} /**APPLE
// BANANA
// MANGO */

// //4. Create an object student with properties name, age, and grade. Use a for...in loop to print all the properties and their values.
const student = {
  name: "Aun",
  age: 20,
  grade: "13th",
};

for (const keys in student) {
  console.log(`${keys} is ${student[keys]}`); /**name is Aun
    age is 20
    grade is 13th */
}

// //5. Write a function checkNumber(num) that takes a number as input and:

// // Prints "Positive" if the number is greater than 0.

// // Prints "Negative" if the number is less than 0.

// // Prints "Zero" if the number is 0.

function checkNumber(num) {
  let input = prompt(num);
  let inputNum = Number(input);
  console.log(`Number is: `);
  if (inputNum > 0) {
    console.log("Positive");
  } else if (inputNum < 0) {
    console.log("Negative");
  } else if (inputNum === 0) {
    console.log("Zero");
  }
}
checkNumber();

//5. Given an array nums = [1, 2, 3, 4, 5], use map() to create a new array where each element is squared.
const nums = [1, 2, 3, 4, 5];
const numsInArr = nums.map((val) => val ** 2);
console.log(numsInArr); //[ 1, 4, 9, 16, 25 ]

/**6. ForEach Method
Q7:
Given an array names = ["Ali", "Sara", "Ahmed", "Aisha"], use forEach() to print "Hello, [name]!" for each name.
**/
const names = ["Ali", "Sara", "Ahmed", "Aisha"];
names.forEach((items) => console.log(`Hello ${items}`));
// Hello Ali
// Hello Sara
// Hello Ahmed
// Hello Aisha

// 7. Filter Method
// Q8:
// Given an array ages = [15, 22, 18, 30, 16, 25], use filter() to create a new array containing only ages 18 and above.
const ages = [15, 22, 18, 30, 16, 25];
const ageFilter = ages.filter((age) => age >= 18);
console.log(ageFilter); //[ 22, 18, 30, 25 ]

// 8. Reduce Method
// Q9:
// Given an array prices = [100, 200, 300, 400], use reduce() to calculate the total sum of all prices.
const prices = [100, 200, 300, 400];
const reduceOfPrice = prices.reduce((acc, currval) => {
  return acc + currval;
}, 0);
console.log(reduceOfPrice); //1000

// 9. Combining Multiple Concepts

// Q10:
// Write a function processNumbers(arr) that:

// Filters out numbers less than 10.

// Multiplies the remaining numbers by 2 using map().

// Sums up the modified numbers using reduce().

// Returns the final sum. */
function processNumbers(arr) {
  const numFilter = arr.filter((num) => num >= 10); //acc to condition we have to filter out numbers which are less than 10
  console.log(`Filtered Num: ${numFilter}`);

  const mapMultiple = numFilter.map((num) => num * 2);
  console.log(`Multiplied Number: ${mapMultiple}`);

  const finalSum = mapMultiple.reduce((acc, currval) => {
    return acc + currval;
  }, 0);
  console.log(finalSum);
}
const arr = [1, 2, 18, 6, 9, 10, 15, 8];
processNumbers(arr);
