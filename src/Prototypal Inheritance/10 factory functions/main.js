'use strict'
// Check this demo via google devtools
// const human = {
//   type: 'human'
// }

// const tyler = {
//   hair: 'brown',
//   height: '6 foot'
// }

// const sally = {
//   hair: 'blonde',
//   height: '5 foot 4'
// }

// Object.setPrototypeOf(tyler, human)
// Object.setPrototypeOf(sally, human)

// console.log(tyler.type)

const createUser = (character, smart = true) => ({
  smart, // put in front of other props for overridden
  ...character,
  type: 'human'
})

const tyler = createUser({
  hair: 'brown',
  height: '6 foot'
}
)
const sally = createUser({
  hair: 'blonde',
  height: '5 foot 4'
})

console.log(tyler.type)
console.log(sally.type)
