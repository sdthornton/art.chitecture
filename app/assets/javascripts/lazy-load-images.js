function lazyLoadImages() {
  var imgPlaceholders = document.querySelectorAll('[data-img-load]');

  imgPlaceholders.forEach(function (imgPlaceholder) {
    var mainImg = imgPlaceholder.nextElementSibling;
    var imgSrc = imgPlaceholder.dataset.imgLoad;
    var retinaSrc = imgPlaceholder.dataset.retinaSrc;
    var loadingImg = new Image();

    loadingImg.onload = function () {
      if (mainImg.nodeName === "IMG") {
        if (retinaSrc) {
          mainImg.srcset = loadingImg.srcset;
        }

        mainImg.src = loadingImg.src;
      } else {
        mainImg.style.backgroundImage = 'url("' + imgSrc + '")';
      }
      mainImg.parentNode.classList.add('js-visible');
    }

    if (retinaSrc) {
      loadingImg.srcset = retinaSrc + " 2x";
    }
    loadingImg.src = imgSrc;
  });
};
