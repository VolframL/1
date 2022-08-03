const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  nav: false,
  controls: false
});

document.querySelector('.prev').addEventListener('click', function() {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function() {
  slider.goTo('next');
});


window.addEventListener('scroll', function(e) {
  if (this.scrollY > 1800) {
    document.querySelector('.pageup').classList.add('visible');
  } else document.querySelector('.pageup').classList.remove('visible');
});

new WOW().init();