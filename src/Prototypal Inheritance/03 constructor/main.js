// Check this demo via google devtools
function Foo() {

}

Foo.prototype = {}

// override the express above
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

console.log(Foo)

// default property and only one
console.log(Foo.prototype)
console.log(Foo.prototype.constructor)
console.log(Foo.prototype.constructor === Foo)

const a = new Foo()

// constructor is now not equal to Foo
console.log(a)
console.log(a.constructor === Foo)
console.log(a.constructor === Object)
