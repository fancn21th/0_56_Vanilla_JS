'use strict'
// Check this demo via google devtools

class Vehicle {
  isLegal() {
    return true
  }
}

class Car extends Vehicle {
  canBeUsed() {
    return this.isLegal()
  }
}

console.log(typeof Vehicle)
console.log(Vehicle.prototype.constructor === Vehicle)

const myCar = new Car()

console.log(Object.getPrototypeOf(myCar) === Car.prototype)
console.log(Object.getPrototypeOf(Car.prototype) === Vehicle.prototype)
console.log(Vehicle.prototype.isLegal())
