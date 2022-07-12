
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
