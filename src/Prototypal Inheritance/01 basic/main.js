// Check this demo via google devtools
const foo = {
  firstName: 'alex'
}

const fooProto = {
  lastName: 'fan'
}

const fooArray = []

Object.setPrototypeOf(foo, fooProto)

console.log(foo)
console.log(fooArray)
