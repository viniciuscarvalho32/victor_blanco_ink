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
    var tamanhoTela = window.innerWidth;
    // console.log(tamanhoTela)
    if (tamanhoTela < 768) {
        var eleSobreDesk = document.querySelector('.sobre-desk')
         if (eleSobreDesk) {
            eleSobreDesk.className = 'sobre-desk-hidden';
         }
    } else {

    }
    window.addEventListener('resize', function (item) {
      var largura = item.target.innerWidth;
      // console.log(largura)
      if (largura > 768) {
        //Desktop
        var eleSobreMob = document.querySelector('.sobre-mob')
        if (eleSobreMob) {
          eleSobreMob.className = 'sobre-mob-hidden';
        }
        var eleSobreDeskHidd = document.querySelector('.sobre-desk-hidden')
        if (eleSobreDeskHidd) {
          eleSobreDeskHidd.className = 'sobre-desk';
        }
      } else {
        //Mobile
        var eleSobreMobHidd = document.querySelector('.sobre-mob-hidden')
        if (eleSobreMobHidd) {
          eleSobreMobHidd.className = 'sobre-mob';
        }
        var eleSobreDesk = document.querySelector('.sobre-desk')
        if (eleSobreDesk) {
          eleSobreDesk.className = 'sobre-desk-hidden';
        }
      }  
  });