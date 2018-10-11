// Check this demo via google devtools
function Foo() {

}

Foo.prototype = {}

Object.defineProperty(
  Foo.prototype,
  'constructor',
  {
    enumerable: false,
    writable: true,
    configurable: true,
    value: Foo
  }
)

console.log(Foo.prototype)
console.log(Foo.prototype.constructor)

const a = new Foo()

// constructor is now not equal to Foo
console.log(a)
console.log(a.constructor === Foo)
console.log(a.constructor === Object)
