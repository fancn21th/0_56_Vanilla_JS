'use strict'
// Check this demo via google devtools
// function Car(make) {
//   this.make = make
// }

// function Boat(engine) {
//   this.engine = engine
// }

// Object.setPrototypeOf(Boat.prototype, Car.prototype)

// class Car {
//   constructor() {
//   }
// }

// class Boat extends Car {
//   constructor() {
//     super()
//   }
// }

class Car {
  constructor() {
  }
}

class Boat {
  constructor() {
  }
}

// here both Boath and Car are constructor so we need to use prototype property instead of constructor name
Object.setPrototypeOf(Boat.prototype, Car.prototype)

const myCar = new Boat('Ford')

console.log(myCar instanceof Car)
console.log(myCar instanceof Boat)
