$(document).ready(function(){
    var marquee = $('.marquee');
    var indent = marquee.width();
    
    marquee.marquee = function() {
      indent--;
      marquee.css('text-indent', indent);
      if (indent < -1 * marquee.children('.marquee-text').width()) {
        indent = marquee.width();
      }
    };
    
    marquee.data('interval', setInterval(marquee.marquee, 500 / 60));
  });
