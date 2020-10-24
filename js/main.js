let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function(event){
    event.preventDefault();
    menu.classList.toggle('visible');
})

window.addEventListener('scroll', function(e) {
    const
      oldScroll = this.oldScroll || 0,
      newScroll = this.scrollY,
      isScrollDown = newScroll > oldScroll;
  
    document.querySelector('.header').classList.toggle('scroll-down', isScrollDown);
    document.querySelector('.header-nav').classList.toggle('scroll-down', isScrollDown);
  
    this.oldScroll = newScroll;
  });