(function () {
  function addSiteLoadedClass() {
    document.body.classList.add('js-site-loaded');
  }

  addSiteLoadedClass();
  document.addEventListener('turbolinks:load', addSiteLoadedClass, false);
  document.addEventListener('turbolinks:visit', function () {
    document.documentElement.classList.add('js-turbo-visit');
  });

  function markSiteAsLoaded() {
    if (document.documentElement.classList.contains('js-turbo-visit')) {
      addSiteLoadedClass();
    }
  }
}());
