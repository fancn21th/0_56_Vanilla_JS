(function($) {
  $.fn.highlight = function( options ) {
    var opts = $.extend(
      {},
      $.fn.highlight.defaults, options
    )
    return this.css({
      color: opts.color,
      fontSize: opts.fontSize
    })
  }
  $.fn.highlight.defaults = {
    color: 'red',
    fontSize: 24
  }
}( jQuery ))

jQuery('ul>li:first-child a').highlight({
  color: 'blue',
  fontSize: 28
})
