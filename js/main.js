// open caegory_nav_list
const category_btn=document.querySelector(".category_btn")
const caegory_nav_list=document.querySelector(".caegory_nav_list")
function Open_Categ_List() {
  caegory_nav_list.classList.toggle("active")
}
category_btn.onclick=Open_Categ_List








// open  & close cart

const Open_Cart_Icon=document.querySelector(".top_header > div > div > div:nth-child(2)")
const Cart=document.querySelector(".cart")
const Close_Cart=document.querySelector(".close_cart")

Open_Cart_Icon.addEventListener("click" , ()=>{
  Cart.classList.add("active")
})

Close_Cart.addEventListener("click" , ()=>{
  Cart.classList.remove("active")
})



// add products from main page to cart


fetch("js/products.json")
  .then((Response)=> Response.json() )
  .then((data)=>{

    const addToCartBtns=document.querySelectorAll(".btn_add_cart")

    addToCartBtns.forEach((button)=>{
      button.addEventListener("click" , (eo)=>{

        const productid =eo.target.getAttribute("data-id");

        const selcetedProduct = data.find(product => product.id ==productid)


        addToCart(selcetedProduct)

      })
    })

  })


function addToCart(product) {
  console.log(product)

  
}

















