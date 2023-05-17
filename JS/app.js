window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    const logo = document.getElementById("logo");
    
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
      logo.style.display = "block";
    } else {
      navbar.classList.remove("scrolled");
      logo.style.display = "none";
    }
  });
  