(function () {
  document.addEventListener("turbolinks:load", function() {
    var mainMenu = document.querySelector('#main_menu');
    var toggleMainMenu = document.querySelector('#main_menu_toggle');

    toggleMainMenu.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      document.body.classList.toggle('js-main-menu-open');
    }, false);

    document.addEventListener('click', function () {
      if (document.body.classList.contains('js-main-menu-open')) {
        document.body.classList.remove('js-main-menu-open');
      }
    }, false);
  });
}());

