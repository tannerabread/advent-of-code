import { data } from './data.js'

console.log(data.split(/\r?\n/).reduce((acc, curr) => {
  const assignments = curr.split(',')
  const elf1 = /(^\d*)-(\d*$)/g.exec(assignments[0])
  const elf2 = /(^\d*)-(\d*$)/g.exec(assignments[1])
  const a = elf1[1] * 1
  const b = elf1[2] * 1
  const c = elf2[1] * 1
  const d = elf2[2] * 1

  // part 1
  // if ((a >= c && b <= d) || (c >= a && d <= b)) {
  //   return acc + 1
  // }

  // part 2
  if ((b >= c && b <= d) ||
     (a >= c && a <= d) ||
     (a >= c && b <= d) ||
     (c >= a && d <= b)) {
    return acc + 1
     }
  return acc
}, 0))
