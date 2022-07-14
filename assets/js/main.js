

// testimonials
const commentTestimonials = document.querySelector('.testimonials .comment');
const btnPrev = document.querySelector('.testimonials_prev');
const btnNext = document.querySelector('.testimonials_next');


btnPrev.addEventListener('click', ()=>{
  commentTestimonials.style.transform = 'translateX(0)';
})
btnNext.addEventListener('click', ()=>{
  commentTestimonials.style.transform = 'translateX(-100%)';
})



// SWIPER JS BANNER
let swiper = new Swiper(".banner_container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



//FAQ
const faqs = document.querySelectorAll('.faq_container .faq_item');
const faqDetail = document.getElementById('faq_detail');

faqs.forEach(faq =>{
  faq.addEventListener('click', () =>{
    faq.classList.toggle('open');
    
    const icon = faq.querySelector('.faq_icon i');
    console.log(icon)
    if(icon.className === 'uil uil-plus'){
      icon.className = 'uil uil-minus';
    }else{
      icon.className = 'uil uil-plus';
    }
  })
})

// Show Scroll Up
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



// SWIPER JS BLOG

let swiper1 = new Swiper(".blog_container", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {  
    100:{
      slidesPerView: 1,
    },
    510: {
      slidesPerView: 2,
    },
    1012:{
      slidesPerView: 3,
    }
  },
});



// SEARCH MODAL
const openModalSearch = document.getElementById('open-search');
const modalSearch = document.getElementById('modal-search');
const closeModalSearch = document.getElementById('close-modal-search');
const overlayModalSearch = document.getElementById('overlay-modal-search');

// Open modal Search
openModalSearch.addEventListener('click', () =>{
  modalSearch.style.display = 'block';
})


const closeModal = (e) =>{
  if(e.target.classList.contains('search-overlay')){
    modalSearch.style.display = 'none';
}
} 
//close modal search with overlay
overlayModalSearch.addEventListener('click', closeModal)

// Close Modal search with button close 
closeModalSearch.addEventListener('click', () =>{
  modalSearch.style.display = 'none';
})



//MENU MOBILE & TABLET
const btnOpenMenu = document.getElementById('open-menu-bar');
const btnCloseMenu = document.getElementById('close-menu-bar');
const menuBar = document.getElementById('menu-bar');

btnOpenMenu.addEventListener('click', ()=>{
  menuBar.style.transform = "translateX(0)";
})
btnCloseMenu.addEventListener('click', ()=>{
  menuBar.style.transform = "translateX(100%)";
})



