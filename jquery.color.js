(function($) {
  $.fn.agColor = function(options, tagStyle) {
    // default option
    var defaults = {
      color: 'white'
    };
    var tagDef = {};
    if (tagStyle !== undefined && Object.keys(tagStyle).length > 0) {
      tagDef = {'color': tagStyle.color};
    }
    if ($(this)[0].style.color) {
      tagDef.color = $(this)[0].style.color;
    } else if ($(this)[0].getAttribute('color')) {
      tagDef.color = $(this)[0].getAttribute('color');
    }
    var settings = $.extend(true, {}, defaults, options, tagDef);

    // 子要素があれば、子要素で再帰処理
    if ($(this).children().length > 0) {
      $(this).children().agColor(options, tagDef);
    } else {
      $(this).css('color', settings.color);
    }

    return(this);
  };
})(jQuery);