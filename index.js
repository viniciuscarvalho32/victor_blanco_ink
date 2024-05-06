var prevScrollpos = window.scrollY;

    window.onscroll = function() {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav-bar").classList.remove("hidden");
      } else {
        document.getElementById("nav-bar").classList.add("hidden");
      }
      prevScrollpos = currentScrollPos;
    } /*teste*/