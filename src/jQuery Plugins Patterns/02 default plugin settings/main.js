(function($) {
  $.fn.hilight = function( options ) {
    var opts = $.extend(
      {},
      $.fn.hilight.defaults, options
    )
    return this.css({
      color: opts.color
    })
  }
  $.fn.hilight.defaults = {
    color: 'red'
  }
}( jQuery ))

jQuery('a').hilight({
  color: 'blue'
})
