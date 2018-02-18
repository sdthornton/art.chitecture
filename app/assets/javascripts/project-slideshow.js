function projectSlideshow() {
  var featuredProject = document.querySelector('.home-project--featured');
  var featuredImage = featuredProject.querySelector('.smooth-img');
  var featuredContent = featuredProject.querySelector('.project-info__content');
  var featuredLink = featuredProject.querySelector('.project-info');
  var projects = document.querySelectorAll('.home-project');

  function changeProject(direction) {
    var projectImages = [];
    var projectContents = [];
    var infoTexts = [featuredContent.innerHTML];
    var hrefs = [featuredProject.querySelector('.project-info').href];
    var normalSrcs = [featuredImage.dataset.nonfeaturedImg];
    var featuredSrcs = [featuredImage.style.backgroundImage.replace(/url\(.(.*).\)/gi, "$1")];
    for (var i = 0, len = 3; i < len; i++) {
      projectImages.push(projects[i].querySelector('.smooth-img'));
      normalSrcs.push(projectImages[i].src);
      featuredSrcs.push(projectImages[i].dataset.featuredImg);
      projectContents.push(projects[i].querySelector('.project-info__content'));
      infoTexts.push(projectContents[i].innerHTML);
      hrefs.push(projects[i].href);
    }

    if (direction === 'prev') {
      featuredImage.style.backgroundImage = 'url("' + featuredSrcs[3] + '")';
      featuredImage.dataset.nonfeaturedImg = normalSrcs[3]
      featuredContent.innerHTML = infoTexts[3];
      featuredLink.href = hrefs[3];

      for (var i = 0, l = 3; i < l; i++) {
        projectImages[i].src = normalSrcs[i];
        projectImages[i].dataset.featuredImg = featuredSrcs[i];
        projectContents[i].innerHTML = infoTexts[i];
        projects[i].href = hrefs[i];
      }
    } else {
      featuredImage.style.backgroundImage = 'url("' + featuredSrcs[1] + '")';
      featuredImage.dataset.nonfeaturedImg = normalSrcs[1];
      featuredContent.innerHTML = infoTexts[1];
      featuredLink.href = hrefs[1];

      for (var i = 0, l = 3; i < l; i++) {
        var next = i + 2;
        if (next > l) { next = 0 }

        projectImages[i].src = normalSrcs[next];
        projectImages[i].dataset.featuredImg = featuredSrcs[next];
        projectContents[i].innerHTML = infoTexts[next];
        projects[i].href = hrefs[next];
      }
    }
  }

  function nextProject(e) {
    e && e.preventDefault();
    changeProject('next');
  }

  function prevProject(e) {
    e && e.preventDefault();
    changeProject('prev');
  }

  document.querySelector('.home-project-next').addEventListener('click', nextProject, false);
  document.querySelector('.home-project-prev').addEventListener('click', prevProject, false);
}
