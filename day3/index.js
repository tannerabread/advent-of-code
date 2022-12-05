import { data } from "./data.js";

// Part 1
// const rucksacks = data.split(/\n/);

// const duplicates = [];

// for (const sack of rucksacks) {
//   duplicates.push(findDuplicate(sack));
// }

// console.log(
//   duplicates
//     .map((item) => getCharCode(item))
//     .reduce((acc, curr) => acc + curr, 0)
// );

// function findDuplicate(str) {
//   const middle = Math.floor(str.length / 2);
//   const firstComp = str.substr(0, middle);
//   const secondComp = str.substr(middle);

//   for (const item of firstComp) {
//     if (secondComp.includes(item)) return item;
//   }
// }

// Part 2
const input = data.split(/\r?\n/);
let groups = [];
for (let i = 0; i < input.length; i += 3) {
  groups.push(input.slice(i, i + 3));
}
console.log(
  groups.reduce((acc, curr) => {
    const [firstComp, secComp, thirdComp] = curr;
    for (const item of firstComp) {
      if (secComp.includes(item) && thirdComp.includes(item)) {
        console.log(item);
        return acc + getCharCode(item);
      }
    }
  }, 0)
);

function getCharCode(dup) {
  let num = dup.toUpperCase() === dup ? 38 : 96;
  return dup.charCodeAt() - num;
}
