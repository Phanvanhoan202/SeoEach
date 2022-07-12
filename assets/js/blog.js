
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



//show sidebar
const btnShowSidebar = document.getElementById('show-sidebar');
const sidebar = document.getElementById('sidebar');
const btnCloseSidebar = document.getElementById('close-sidebar');

btnShowSidebar.addEventListener('click', () => {
    sidebar.style.transform = 'translateX(0)';
})

btnCloseSidebar.addEventListener('click', () =>{
    sidebar.style.transform = 'translateX(-120%)';

})