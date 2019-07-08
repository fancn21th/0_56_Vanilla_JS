setTimeout(function() {
  console.log('setTimeout callback')
}, 0)

// Microtask queue has a higher priority than the macrotask queue.
Promise.resolve().then(() => console.log('Promise callback'))

console.log('sync output')
