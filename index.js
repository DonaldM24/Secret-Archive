//Header Transition
function viewportToPixels(value) {
    var parts = value.match(/([0-9\.]+)(vh|vw)/)
    var q = Number(parts[1])
    var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
    return side * (q/100)
  }
  const header = document.querySelector('.header-container')
  const mobile = document.querySelector('.hamburger')
  window.onscroll = function(){
    var top = window.scrollY;
    if (top >= viewportToPixels('25vh')){
        header.classList.add('active')
        mobile.classList.add('active')
    }else{
        header.classList.remove('active');
        mobile.classList.remove('active')
    }
  }

//Menu Icon
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("open");
    navMenu.classList.toggle("open");
}

const navLink = document.querySelectorAll(".navitem");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("open");
    navMenu.classList.remove("open");
}  