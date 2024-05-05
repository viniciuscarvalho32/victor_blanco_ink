var prevScrollpos = window.scrollY;

    window.onscroll = function() {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav-bar").classList.remove("hidden");
      } else {
        document.getElementById("nav-bar").classList.add("hidden");
      }
      prevScrollpos = currentScrollPos;
    }
    window.addEventListener('resize', function () {
      //var altura = window.innerHeight;
      var largura = window.innerWidth;
     
      if (largura > 768) {
        //Desktop
        var eleSobreMob = document.querySelector('.sobre-mob')
        eleSobreMob.className = 'sobre-mob-hidden';
        var eleSobreDesk = document.querySelector('.sobre-desk-hidden')
        eleSobreDesk.className = 'sobre-desk';
      } else {
        //Mobile
        var eleSobreMob = document.querySelector('.sobre-mob-hidden')
        eleSobreMob.className = 'sobre-mob';
        var eleSobreDesk = document.querySelector('.sobre-desk')
        eleSobreDesk.className = 'sobre-desk-hidden';
      }  
  });