'use strict'
// Check this demo via google devtools

/*
  property could be changed in prototype chain
  in only two cases
*/

// const foo = {
//   name: 'tyler'
// }

const foo = {
  set name(name) {
    this.currentName = name
  }
}

// in the case below the property name could not be updated
// Object.defineProperty(
//   foo,
//   'name',
//   {
//     value: 'tyler',
//     writable: false
//   }
// )

const bar = {
  lastName: 'clark'
}

Object.setPrototypeOf(bar, foo)

// not works
bar.name = 'james'

console.log(bar.name)
console.log(bar)
