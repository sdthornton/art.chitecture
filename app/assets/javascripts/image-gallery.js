function imageGallery() {
  var imageBoard;
  if (imageBoard = document.querySelector('.image-board')) {
    var imageBoardImages = imageBoard.querySelectorAll('.image-board-img');
    var modal = document.querySelector('.image-gallery-modal');
    var modalImage = modal.querySelector('.gallery-modal__img');
    var modalClose = modal.querySelector('.gallery-modal__close');

    for (var i = 0, len = imageBoardImages.length; i < len; i++) {
      imageBoardImages[i].addEventListener('click', function (e) {
        var image = e.target;
        var imageRatio = image.offsetWidth / image.offsetHeight;
        var windowRatio = window.innerWidth / window.innerHeight;

        if (imageRatio / windowRatio > 1) {
          modalImage.classList.add('is-wide');
        } else {
          modalImage.classList.remove('is-wide');
        }

        modalImage.src = image.dataset.largeSrc;
        requestAnimationFrame(openModal);
      }, false);
    }
    window.addEventListener('keyup', function (e) {
      if (e.key === "Escape") {
        requestAnimationFrame(closeModal);
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

    function openModal() {
      modal.classList.add('is-open');
    }

    function closeModal() {
      modal.classList.remove('is-open');
      modalImage.src = "";
    }
  }
};

