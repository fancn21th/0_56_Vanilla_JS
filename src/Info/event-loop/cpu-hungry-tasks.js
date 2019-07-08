let i = 0

let start = Date.now()

function count() {
  // do a heavy job
  for (let j = 0; j < 1e9; j++) {
    i++
  }

  console.log('Done in ' + (Date.now() - start) + 'ms')
}

count()

console.log('I don not want to be blocked')
