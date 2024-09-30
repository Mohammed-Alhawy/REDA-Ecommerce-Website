// open caegory_nav_list
const category_btn=document.querySelector(".category_btn")
const caegory_nav_list=document.querySelector(".caegory_nav_list")
function Open_Categ_List() {
  caegory_nav_list.classList.toggle("active")
}
category_btn.onclick=Open_Categ_List











































// setting swiper
var swiper = new Swiper(".slide-swp", {
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  loop: true,
});