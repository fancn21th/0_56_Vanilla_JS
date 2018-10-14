'use strict'
// Check this demo via google devtools
const parent = {
  hair: 'brown',
  heightInInches() {
    return this.height * 12
  }
}

// const child = Object.create(parent)
// child.height = 6

// Object.assign copy the parent
// so child not actually refer to the parent but copy of parent
const child = Object.assign({
  height: 6,
}, parent)

// even when you update height in parent
// child will still use the height of itself
parent.height = 12

console.log(child.heightInInches())


