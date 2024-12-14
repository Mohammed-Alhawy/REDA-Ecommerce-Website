fetch("js/products.json")

    .then((Response)=> Response.json() )

    .then((data)=>{
      
      const swiper_items_sale=document.getElementById("swiper_items_sale")
      const swiper_items_Electronics=document.getElementById("swiper_Electronics")
      const swiper_items_appliances=document.getElementById("swiper_Appliances")
      const swiper_items_mobiles=document.getElementById("swiper_mobiles")
      

      //   <!-- start sale section -->

      data.forEach((product) => {

        let sale_present = Math.floor( (product.old_price - product.price)  / product.old_price  * 100);

        if (product.old_price) {
          swiper_items_sale.innerHTML+=`
              <div class="swiper-slide product ">
            <span class="sale_present">${sale_present}%</span>

            <div class="img_product">
              <a href="#">
                <img src="${product.img}" alt="">
              </a>
            </div>

            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <p class="name_product">
              <a href="#">${product.name}</a>
            </p>

            <div class="price">
              <p><span>$${product.price}</span></p>
              <p class="old_price">$${product.old_price}</p>
            </div>

            <div class="icons">
              <span class="btn_add_cart" data-id="${product.id}">
                <i class="fa-solid fa-cart-shopping"></i> add to cart
              </span>
              <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
            </div>

          </div>
          `
        }
      });




      // <!-- start Electronics section -->

      data.forEach( (product) =>{

        let sale_present = Math.floor( (product.old_price - product.price)  / product.old_price  * 100);

        if (product.catetory==="electronics") {

          const old_price_pargraph=product.old_price? `<p class="old_price">$${product.old_price}</p>` : "" ;

          const sale_present_span=product.old_price? `<span class="sale_present">${sale_present}%</span>` : "";

          swiper_items_Electronics.innerHTML+=`
              <div class="swiper-slide product ">
            ${sale_present_span}

            <div class="img_product">
              <a href="#">
                <img src="${product.img}" alt="">
              </a>
            </div>

            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <p class="name_product">
              <a href="#">${product.name}</a>
            </p>

            <div class="price">
              <p><span>$${product.price}</span></p>
              ${old_price_pargraph}
            </div>

            <div class="icons">
              <span class="btn_add_cart" data-id="${product.id}">
                <i class="fa-solid fa-cart-shopping"></i> add to cart
              </span>

              <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
            </div>

          </div>
          `
        }

      })




      //   <!-- start Appliances section -->

      data.forEach( (product) =>{

        let sale_present = Math.floor( (product.old_price - product.price)  / product.old_price  * 100);

        if (product.catetory==="appliances") {

          const old_price_pargraph=product.old_price? `<p class="old_price">$${product.old_price}</p>` : "" ;

          const sale_present_span=product.old_price? `<span class="sale_present">${sale_present}%</span>` : "";

          swiper_items_appliances.innerHTML+=`

              <div class="swiper-slide product ">
            ${sale_present_span}

            <div class="img_product">
              <a href="#">
                <img src="${product.img}" alt="">
              </a>
            </div>

            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <p class="name_product">
              <a href="#">${product.name}</a>
            </p>

            <div class="price">
              <p><span>$${product.price}</span></p>
              ${old_price_pargraph}
            </div>

            <div class="icons">
              <span class="btn_add_cart" data-id="${product.id}">
                <i class="fa-solid fa-cart-shopping"></i> add to cart
              </span>
              <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
            </div>

          </div>
          `
        }

      })



      //   <!-- start mobiles section -->

      data.forEach( (product) =>{

        let sale_present = Math.floor( (product.old_price - product.price)  / product.old_price  * 100);

        if (product.catetory==="mobiles") {

          const old_price_pargraph=product.old_price? `<p class="old_price">$${product.old_price}</p>` : "" ;

          const sale_present_span=product.old_price? `<span class="sale_present">${sale_present}%</span>` : "";

          swiper_items_mobiles.innerHTML+=`

              <div class="swiper-slide product ">
            ${sale_present_span}

            <div class="img_product">
              <a href="#">
                <img src="${product.img}" alt="">
              </a>
            </div>

            <div class="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>

            <p class="name_product">
              <a href="#">${product.name}</a>
            </p>

            <div class="price">
              <p><span>$${product.price}</span></p>
              ${old_price_pargraph}
            </div>

            <div class="icons">
              <span class="btn_add_cart">
                <i class="fa-solid fa-cart-shopping"></i> add to cart
              </span>
              <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
            </div>

          </div>
          `
        }

      })




    })


