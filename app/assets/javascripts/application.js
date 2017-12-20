// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

(function() {
  var lastScrollY = 0;
  var ticking = false;
  var navPermaText = document.querySelector('.site-logo__perma-text');

  var update = function() {
    if (lastScrollY < 124) {
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
