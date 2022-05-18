//   $(window).scroll(function() {
//     if ($(this).scrollTop() > 100){
//         $('header').addClass("header__filled"); 
//          }
//         else{
//         $('header').removeClass("header__filled");         
//       } 
// });

// -----------------------------------------------------на чистом js
const header = document.querySelector(".header");
window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);

function checkScroll() {
  let scrollPos = window.scrollY;

  if(scrollPos > 10) {
    header.classList.add("header__filled"); 
  }
 else{
  header.classList.remove("header__filled");
    }      
}

// clearjs
// document.querySelectorAll('a[href^="#"').forEach(link => {

//   link.addEventListener('click', function(e) {
//       e.preventDefault();
//       let href = this.getAttribute('href').substring(1);
//       const scrollTarget = document.getElementById(href);
//       const topOffset = document.querySelector('.header').offsetHeight;
//       // const topOffset = 0; // если не нужен отступ сверху 
//       const elementPosition = scrollTarget.getBoundingClientRect().top;
//       const offsetPosition = elementPosition - topOffset;
//       window.scrollBy({
//           top: offsetPosition,
//           behavior: 'smooth'
//       });
//   });
// });

  ;(function() {
    $(document).ready(function() {
      var headerOffset = document.querySelector(".header").clientHeight;
      $("a.scrollto").click(function () {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - headerOffset}, 400);
        return false;
      });
    });
  })();

  ;(function() {
    let sections = $('section'), 
    nav = $('nav'), 
    nav_height = nav.outerHeight();
    $(window).on('scroll', function () {
        $('nav a').removeClass('active');
        let cur_pos = $(this).scrollTop(); 
        sections.each(function() {
            let top = $(this).offset().top - nav_height - 220,
            bottom = top + $(this).outerHeight();       
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');    
                $(this).addClass('active');
                nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
            }
        });
    });
  })();

  
 