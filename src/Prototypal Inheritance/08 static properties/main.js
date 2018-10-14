'use strict'
// Check this demo via google devtools
class Food {
  static isHealthy() {
    return true
  }
  static canBeEaten() {
    return this.isHealthy()
  }
}

// same as above
// function Food() {

// }

// Food.isHealthy = () => true

console.log(Food.isHealthy())
console.log(Food.canBeEaten())
