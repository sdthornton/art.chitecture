function homeAnimation() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  var cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
  var homeText = document.querySelector('.home-home');
  var homes = ["home", "maison", "huis", "haus", "σπίτι", "casa", "repouso", "hogar", "منزل", "בית", "koti", "hem", "baile", "dom", "thuis", "acasă"];
  var lastUpdate = 0;
  var homeOpts, homeWordRaf;

  function getHomeWord(stamp) {
    homeOpts = homes.filter(function (home) { return home != homeText.innerText });
    homeText.innerText = homeOpts[Math.floor(Math.random()*homeOpts.length)];
  }

  function loopGetHomeWord(stamp) {
    if (!document.body.classList.contains('js-site-loaded')) {
      lastUpdate = stamp;
    } else {
      if (stamp >= (300 + lastUpdate)) {
        lastUpdate = stamp;
        getHomeWord();
      }
    }
    homeWordRaf = requestAnimationFrame(loopGetHomeWord);
  }

  homeText.addEventListener('mouseover', loopGetHomeWord, false);
  homeText.addEventListener('mouseout', function () {
    homeText.innerText = "home";
    cancelAnimationFrame(homeWordRaf);
  }, false);
}
