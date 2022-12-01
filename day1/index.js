import { data } from "./data.js";

const elfFood = data.split(/\r?\n{2}/).filter((element) => element);

// Part 1
// let max = 0;
// for (const calories of elfFood) {
//   const totalCals = calories
//     .split(/\n/)
//     .reduce((acc, curr) => acc * 1 + curr * 1);
//   if (totalCals > max) {
//     max = totalCals;
//   }
// }
// console.log(max);

// Part 2
const totalCalsArr = [0, 0, 0];
for (const calories of elfFood) {
  const totalCals = calories
    .split(/\n/)
    .reduce((acc, curr) => acc * 1 + curr * 1);
  // check if new totalCals is greater than any in the array
  if (totalCals > totalCalsArr[0]) {
    totalCalsArr[0] = totalCals * 1;
  }
  totalCalsArr.sort();
}
let max = totalCalsArr.reduce((acc, curr) => acc + curr, 0);
console.log(max);
