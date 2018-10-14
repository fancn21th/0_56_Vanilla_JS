'use strict'
// Check this demo via google devtools
const obj = {
  firstName: 'Alex',
  lastName: 'Fan'
}

const protoObj = {
  hair: 'brown'
}

Object.setPrototypeOf(obj, protoObj)

let n = 0

// // literate through chain
// for (let prop in obj) {
//   n++
// }

// literate through no chain
for (let prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    n ++
  }
}

console.log(n)

console.log(Object.keys(obj).length)
