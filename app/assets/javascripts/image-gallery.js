function imageGallery() {
  var imageBoard;
  if (imageBoard = document.querySelector('.image-board')) {

    var imageBoardImages = imageBoard.querySelectorAll('.image-board-img');
    var imageCount = imageBoardImages.length;
    var modal = document.querySelector('.image-gallery-modal');
    var modalImage = modal.querySelector('.gallery-modal__img');
    var modalClose = modal.querySelector('.gallery-modal__close');
    var prevArrow = modal.querySelector('.image-gallery__prev');
    var nextArrow = modal.querySelector('.image-gallery__next');

    for (var i = 0, len = imageBoardImages.length; i < len; i++) {
      imageBoardImages[i].addEventListener('click', onClick, false);
    }

    function onClick(e) {
      var image = e.target;
      var index = image.dataset.index;
      updateImage(image, index);
      requestAnimationFrame(openModal);
    }

    window.addEventListener('keyup', function (e) {
      if (e.key === "Escape") {
        requestAnimationFrame(closeModal);
      }

      if (e.key === "ArrowRight") {
        requestAnimationFrame(nextImage);
      }

      if (e.key === "ArrowLeft") {
        requestAnimationFrame(prevImage);
      }
    }, false);

    modalClose.addEventListener('click', function () {
      requestAnimationFrame(closeModal);
    }, false);

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        requestAnimationFrame(closeModal);
      }
    }, false);

    prevArrow.addEventListener('click', function () {
      requestAnimationFrame(prevImage);
    }, false);

    nextArrow.addEventListener('click', function () {
      requestAnimationFrame(nextImage);
    }, false);

    function openModal() {
      modal.classList.add('is-open');
    }

    function closeModal() {
      modal.classList.remove('is-open');
      setTimeout(function () {
        requestAnimationFrame(function () {
          modalImage.src = "";
          modalImage.classList.remove('is-visible');
        });
      }, 500);
    }

    function updateImage(image, index) {
      var imageRatio = image.offsetWidth / image.offsetHeight;
      var windowRatio = window.innerWidth / window.innerHeight;
      var preppedImage = document.createElement('img');

      if (imageRatio / windowRatio > 1) {
        modalImage.classList.add('is-wide');
      } else {
        modalImage.classList.remove('is-wide');
      }

      preppedImage.onload = function (a) {
        modalImage.src = this.src;
        modalImage.classList.add('is-visible');
        modalImage.dataset.currentImage = index;
      };

      setTimeout(function () {
        preppedImage.src = image.dataset.largeSrc;
      }, 300);
    }

    function nextImage() {
      var index = parseInt(modalImage.dataset.currentImage) + 1;
      if (index > imageCount) {
        index = 1;
      }
      var nextImg = document.querySelector('[data-index="' + index + '"]');


      modalImage.classList.remove('is-visible');
      modalImage.src = "";

      try {
        nextImg.scrollIntoView({ behavior: 'smooth' });
      } catch(err) {
        nextImg.scrollIntoView();
      }

      updateImage(nextImg, index);
    }

    function prevImage() {
      var index = parseInt(modalImage.dataset.currentImage) - 1;
      if (index < 1) {
        index = imageCount;
      }
      var prevImg = document.querySelector('[data-index="' + index + '"]');

      modalImage.classList.remove('is-visible');
      modalImage.src = "";

      try {
        prevImg.scrollIntoView({ behavior: 'smooth' });
      } catch(err) {
        prevImg.scrollIntoView();
      }

      updateImage(prevImg, index);
    }

  }
};

