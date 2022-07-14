
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


// Show Scroll Up
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 150) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



