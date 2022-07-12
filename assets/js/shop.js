
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



// VIEW PRODUCT
const btnViewGrid = document.getElementById('view-grid');
const btnViewDetail = document.getElementById('view-detail');
const productList = document.getElementById('product-list');

btnViewDetail.addEventListener('click', () =>{
    btnViewGrid.classList.remove('active');
    btnViewDetail.classList.add('active');
    productList.classList.add('view-detail');
})

btnViewGrid.addEventListener('click', () =>{
    productList.classList.remove('view-detail');
    btnViewDetail.classList.remove('active');
    btnViewGrid.classList.add('active');
})


// PAGINATION
const pagination = document.querySelectorAll('.pagination .page');

const changAtivepagination = () =>{
    pagination.forEach(page =>{
    page.classList.remove('active')
    })
}

pagination.forEach( page =>{
    page.addEventListener('click', () =>{
        changAtivepagination()
        page.classList.add('active');
    })
})