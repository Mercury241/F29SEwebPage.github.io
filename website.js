document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navi");
    const navbarHeight = 100;
    const distanceFromTop = Math.abs(
      document.body.getBoundingClientRect().top
    );
    if (distanceFromTop >= navbarHeight) navbar.classList.add("scroll-top");
    else navbar.classList.remove("scroll-top");
  });