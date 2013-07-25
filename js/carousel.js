var carousel = document.getElementById('carousel');

// Buttons
var next = document.getElementById('next');
var previous = document.getElementById('previous');

var nyc = document.getElementById('img1');
var sf = document.getElementById('img2');
var lon = document.getElementById('img3');

var images = [nyc, sf, lon];
function getLastImgMargin() {
  var margin = 0;
  for (var i = 0; i < images.length - 1; i++) {
    margin -= images[i].width;
  }
  return margin;
}
var lastImgMargin = getLastImgMargin();
var marker = 0;

carousel.style.marginLeft = 0;

// Create mouseoveer and mouseexit events for the buttons
// to change their opacity from .5 to .2

next.onmouseover = function(event) {
  next.style.opacity = 0.2;
};

next.onmouseout = function(event) {
  next.style.opacity = 0.5;
};

previous.onmouseover = function(event) {
  previous.style.opacity = 0.2;
};

previous.onmouseout = function(event) {
  previous.style.opacity = 0.5;
};

// Create onclick events to advance the images

goToNext = function() {
  if (marker < images.length - 1) {
    marginLeft = parseInt(carousel.style.marginLeft, 10);
    carousel.style.marginLeft = (marginLeft - (images[marker + 1].width)) + 'px';
    marker++;
  }
  else {
    carousel.style.marginLeft = 0 + 'px';
    marker = 0;
  }
};

goToPrev = function() {
  if (marker > 0) {
    marginLeft = parseInt(carousel.style.marginLeft, 10);
    carousel.style.marginLeft = (marginLeft + images[marker - 1].width) + 'px';
    marker--;
  }
  else {
    carousel.style.marginLeft = lastImgMargin + 'px';
    marker = images.length - 1;
  }
};

next.onclick = function() {
  goToNext();
};

previous.onclick = function() {
  goToPrev();
};

document.getElementById("slideshow-button").onclick = function() {
  slideshowTimer = setInterval(goToNext, 1000);
};








