(function(){
  if (typeof document.querySelector === 'undefined') {
    return; // be kind to old browsers and get out
  }
  var slideshow = document.querySelector('.gallery');
  // Replace the gallery class with slideshow
  slideshow.className = 'slideshow';
  // Grab all the slides -- that is, the list items
  var slides = slideshow.querySelectorAll('li');
  console.log(slides.length, 'slides');

  slides[0].className = 'is-showing';

  slideshow.addEventListener('click', function(e){
    console.log(e.target, 'clicked')
  })

})();
