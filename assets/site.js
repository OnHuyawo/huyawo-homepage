(function(){
  var menu=document.querySelector('.menu-toggle');
  var nav=document.getElementById('main-navigation');
  if(menu&&nav){
    menu.addEventListener('click',function(){var open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
    nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false')})});
  }
  if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.documentElement.classList.add('js');
    var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target)}})},{rootMargin:'0px 0px 70px 0px',threshold:0.01});
    document.querySelectorAll('[data-reveal]').forEach(function(el){observer.observe(el)});
  }
})();
