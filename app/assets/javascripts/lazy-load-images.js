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
