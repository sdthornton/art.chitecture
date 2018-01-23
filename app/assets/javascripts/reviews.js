function reviews() {
  var reviewsSection = document.querySelector('.reviews');
  var reviewDots = reviewsSection.querySelector('.review-dots');
  var lastReviewUpdate = 0;
  var activeDot, activeReview, reviewRef, nextReview;
  reviewsSection.style.height = reviewsSection.offsetHeight + 'px';
  reviewsSection.classList.add('js-height-set');

  function chooseReview(selectedDot) {
    activeDot = reviewDots.querySelector('.dot.is-active');
    activeReview = reviewsSection.querySelector('.review-text.is-active');
    reviewRef = selectedDot.dataset.reviewRef;
    nextReview = reviewsSection.querySelector('[data-review="' + reviewRef + '"]');
    activeDot.classList.remove('is-active');
    selectedDot.classList.add('is-active');
    activeReview.classList.remove('is-active');
    nextReview.classList.add('is-active');
  }

  function chooseReviewLoop(stamp) {
    if (stamp >= (6000 + lastReviewUpdate)) {
      nextDot = reviewDots.querySelector('.dot.is-active').nextElementSibling;
      if (!nextDot) {
        nextDot = reviewDots.children[0];
      }
      chooseReview(nextDot);
      lastReviewUpdate = stamp;
    }
    requestAnimationFrame(chooseReviewLoop);
  }

  requestAnimationFrame(chooseReviewLoop);

  reviewDots.querySelectorAll('.dot').forEach(function (dot) {
    dot.addEventListener('click', function (e) {
      requestAnimationFrame(function (stamp) {
        chooseReview(e.target);
        lastReviewUpdate = stamp;
      })
    }, false);
  });
}
