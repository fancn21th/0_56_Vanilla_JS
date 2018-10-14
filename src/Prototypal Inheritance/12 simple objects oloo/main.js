'use strict'
// Check this demo via google devtools
// OLOO (object linking to other object)
const house = {
  set houseColor(color) {
    this.color = color
  }
}

const myHouse = Object.create(house)

console.log(myHouse.houseColor = 'white')

console.log(myHouse)

console.log(myHouse.color)

