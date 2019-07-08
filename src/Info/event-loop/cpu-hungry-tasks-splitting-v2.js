let i = 0

let start = Date.now()

// move the scheduling in the beginning of the count()
function count() {
  // move the scheduling at the beginning
  if (i < 1e9 - 1e6) {
    // remember, there’s the in-browser minimal delay of 4ms for many nested setTimeout calls. Even if we set 0, it’s 4ms (or a bit more). So the earlier we schedule it – the faster it runs.
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
