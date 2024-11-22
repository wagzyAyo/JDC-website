// alert(`Welcome to Jennifer Dede's Clothing`)
document.addEventListener('DOMContentLoaded', function (){
    const swiper = new Swiper('.swiper', {
        slidePerView : 1,
        spaceBetween: 20,
     
     
       
         // Navigation arrows
         navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         },
     
         breakPoint: {
             768: {
                 slidePerView: 2,
             },
             1024: {
                 slidePerView: 3,
             }
         }
       
       });
})
