// alert(`Welcome to Jennifer Dede's Clothing`)
document.addEventListener('DOMContentLoaded', function (){
    const swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
       
         // Navigation arrows
         navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         },
     
         breakpoints: {
            450:{
                slidesPerView: 1,
            },
             768: {
                 slidesPerView: 2,
             },
             1024: {
                 slidesPerView: 3,
             },
             1300: {
                slidesPerView: 4
             }
         }
       
       });
})
