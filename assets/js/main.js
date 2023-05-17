$(function () {
  const nav = document.querySelector(".my-nav");
  const hero = document.querySelector("#hero");
  const navScrolled = document.querySelector(".my-nav.scrolled");
  let navLogo = document.querySelector("#navBrand");
  // const headerCue = document.querySelector(".header-cue");
  // const meetMonsters = document.querySelector("#meet");
  // const monsterImg = document.querySelectorAll(".monster");
  const navHeight = nav.scrollHeight;

  // Intersection observer to change navbar background upon page scroll
  const navOptions = {
    threshold: 0,
    rootMargin: -navHeight - 20 + "px",
  };

  const navScrollObserver = new IntersectionObserver((entries) => {
    !entries[0].isIntersecting
      ? nav.classList.add("scrolled")
      : nav.classList.remove("scrolled");
  }, navOptions);

  navScrollObserver.observe(hero);

  if (navScrolled) {
    // navLogo.setAttribute("src", "./assets/img/logo_halo_inverse.svg");
    navLogo.src = "./assets/img/logo_halo_inverse.svg";
  }

  // /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  // let prevScrollPosition = window.pageYOffset;
  // window.onscroll = function () {
  //   let currentScrollPosition = window.pageYOffset;
  //   if (prevScrollPosition > currentScrollPosition) {
  //     nav.style.top = "0";
  //   } else {
  //     nav.style.top = -nav.offsetHeight + "px";
  //   }
  //   prevScrollPosition = currentScrollPosition;
  // };

  // Multi item Carousel
  // Instantiate the Bootstrap carousel
  const carousel = $(".multi-item-carousel");
  carousel.carousel({
    interval: 200000,
  });

  // for every slide in carousel, copy the next slide's item in the slide.
  // Do the same for the next, next item.
  $("#carouselThumbIndicators .carousel-item").each(function () {
    let next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }
    next.children(":first-child").clone().appendTo($(this));

    if (next.next().length > 0) {
      next.next().children(":first-child").clone().appendTo($(this));
    } else {
      $(this)
        .siblings(":first")
        .children(":first-child")
        .clone()
        .appendTo($(this));
    }
  });
});
