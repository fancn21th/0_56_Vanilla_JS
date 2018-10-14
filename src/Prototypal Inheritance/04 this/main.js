'use strict'
// Check this demo via google devtools
function Foo(name) {
  this.name = name
}

Foo.prototype.myName = function() {
  return this.name
}

function Bar(name) {
  // call constructor in chain
  Foo.call(this, name)
}

// link prototype
Bar.prototype = Object.create(Foo.prototype)

const a = new Bar('Alex')

console.log(a.myName())
