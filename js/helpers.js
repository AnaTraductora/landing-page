
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos)
  if (currentScrollPos < 50) {
      [...document.querySelectorAll(".hide-on-scroll")].forEach(el => el.style.opacity = '1');
  } else {
    [...document.querySelectorAll(".hide-on-scroll")].forEach(el => el.style.opacity = '0');
  }
  previousScrollpos = currentScrollPos;
}