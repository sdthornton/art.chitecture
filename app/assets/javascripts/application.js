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


function addSiteLoadedClass() {
  requestAnimationFrame(function () {
    document.body.classList.add('js-site-loaded');
  }, 250);
}
function markSiteAsLoaded() {
  if (document.documentElement.classList.contains('js-turbo-visit')) {
    addSiteLoadedClass();
  } else if (!document.body.classList.contains('js-site-loaded')) {
    setTimeout(addSiteLoadedClass, 250);
  }
}
document.addEventListener("DOMContentLoaded", markSiteAsLoaded, false);
document.addEventListener('turbolinks:load', markSiteAsLoaded, false);
document.addEventListener('turbolinks:visit', function () {
  document.body.classList.remove('js-site-loaded');
  document.documentElement.classList.add('js-turbo-visit');
}, false);


/* Header scroll reveal */
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


/* Lazy load images */
function lazyLoadImages() {
  var imgPlaceholders = document.querySelectorAll('[data-img-load]');
  var imagesCount = imgPlaceholders.length;
  var imagesReady = 0;
  var imagesAreLoaded = new Event('imagesAreLoaded')
  imgPlaceholders.forEach(function (imgPlaceholder) {
    var mainImg = imgPlaceholder.nextElementSibling;
    var imgSrc = imgPlaceholder.dataset.imgLoad;
    var loadingImg = new Image();
    loadingImg.onload = function () {
      if (mainImg.nodeName === "IMG") {
        mainImg.src = imgSrc;
      } else {
        mainImg.style.backgroundImage = 'url("' + imgSrc + '")';
      }
      mainImg.parentNode.classList.add('js-visible');
      imagesReady += 1;
      if (imagesReady === imagesCount) {
        document.dispatchEvent(imagesAreLoaded);
      }
    }
    loadingImg.src = imgSrc;
  });
};
