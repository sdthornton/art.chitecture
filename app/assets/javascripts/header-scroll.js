(function() {
  var lastScrollY = 0;
  var ticking = false;
  var navPermaText = document.querySelector('.site-logo__perma-text');

  var update = function() {
    if (lastScrollY < 96) {
      document.body.classList.remove('js-fixed-nav');
    } else {
      document.body.classList.add('js-fixed-nav');
    }

    ticking = false;
  };

  var requestTick = function() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  };

  var onScroll = function() {
    lastScrollY = window.scrollY;
    requestTick();
  };

  window.addEventListener('scroll', onScroll, false);
})();
