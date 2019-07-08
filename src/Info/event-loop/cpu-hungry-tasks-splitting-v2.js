let i = 0

let start = Date.now()

// move the scheduling in the beginning of the count()
function count() {
  // move the scheduling at the beginning
  if (i < 1e9 - 1e6) {
    setTimeout(count) // schedule the new call
  }

  do {
    i++
  } while (i % 1e6 != 0)

  if (i == 1e9) {
    console.log('Done in ' + (Date.now() - start) + 'ms')
  }
}

count()

console.log('I don not want to be blocked')
