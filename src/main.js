var foo = 1

var bar = function (params1) {
  setTimeout(function () {
    console.log(params1)
  }, 2000)
}

bar(foo)
