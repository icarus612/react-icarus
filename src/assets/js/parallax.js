$(window).scroll(function() {
  let wScroll = $(this).scrollTop();
  let parallax = {}
  parallax[".top-parallax"] = -80;

  for (let key in parallax){
    $(key).css({
      'transform' : 'translate(0px, '+ wScroll / parallax[key] +'%)'
    });
  }


});
