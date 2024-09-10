
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "+50px";  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

function showGiantImage(clickedImage) {
  var giantImage = document.getElementById('giantImage');
  var tempSrc = giantImage.src;
  giantImage.src = clickedImage.src;
  clickedImage.src = tempSrc;
}