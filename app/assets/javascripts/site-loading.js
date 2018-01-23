(function () {
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
}());
