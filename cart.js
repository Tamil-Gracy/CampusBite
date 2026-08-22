import { menuItems } from './menuItems.js';
const getcartIds = localStorage.getItem('cartIds');
const cartIds = JSON.parse(getcartIds);
//console.log(cartIds); 
const cartCards= document.getElementById('cartItems');
menuItems.forEach((item) => {
    cartIds.forEach((cartItemId) => {
        if (cartItemId == '') {
           cartCards.innerHTML = '<h1>Cart is Empty</h1>';
            // alert('empty cart');
        }
        else if (item.id == cartItemId) {
            //alert('items available');
            const cartDiv = document.createElement('div');
            cartDiv.innerHTML = `
      <div class="cart-item"  data-price="149">

                <img src="${item.image}"
                     alt="Cheesy Chicken Burger"
                     class="food-image">

                <div class="item-details">
                    <h5 id="burger" class="text-sm md:text-md font-medium mb-2">${item.name}</h5>
                    <p class="text-#E9FAF5 mb-2 text-xs line-clamp-2 hidden md:block">${item.desc}</p>
                    <p class="price-details">₹${item.price}</p>
                </div>

                <div class="quantity-control">
                    <button class="remove-cart">-</button>
                    <span class="cart-value">1</span>
                    <button class="add-cart">+</button>
                </div>

                <div class="delete-btn">
                <button class="delete-btn">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
                </div>
            </div>
  `;
  cartCards.append(cartDiv);
        }
    })
});

const cartitems = document.querySelectorAll(".cart-item");
const subtotalAmount = document.getElementById("subtotalAmount");

cartitems.forEach(function (items) {

    const addItems = items.querySelector(".add-cart");
    const removeItems = items.querySelector(".remove-cart");
    const cartValue = items.querySelector(".cart-value");
    const price = items.querySelector(".price-details");
    const deleteBtn = items.querySelector(".delete-btn");

    let priceVal = Number(items.dataset.price);

    let sum = Number(cartValue.textContent);


    // ADD
    addItems.addEventListener("click", function () {

        sum++;

        const totalprice = priceVal * sum;

        price.textContent = "₹" + totalprice;
        cartValue.textContent = sum;

        calculate();  // ⭐ update subtotal

    });


    // REMOVE
    removeItems.addEventListener("click", function () {

        if (sum > 0) {

            sum--;

            const totalprice = priceVal * sum;

            price.textContent = "₹" + totalprice;
            cartValue.textContent = sum;

            calculate();  // ⭐ update subtotal
        }

    });


    // DELETE
    deleteBtn.addEventListener("click", function () {

        items.style.display = "none";

        calculate();  // ⭐ update subtotal

    });

});


function calculate() {

    let total = 0;

    cartitems.forEach(function (items) {

        if (items.style.display !== "none") {

            const price = items.querySelector(".price-details");

            const priceValue = Number(
                price.textContent.replace("₹", "")
            );

            total += priceValue;
            console.log(total)
        }

    });


    subtotalAmount.textContent = "₹" + total;
    const delAmount = document.getElementById("deliveryAmount");
    const disAmount = document.getElementById("disAmount");
    const totalAmount = document.getElementById("totalVal")

    //Delivery Amount
    let delivery = 0;
    if (total > 200) {
        delivery = 0;
        delAmount.textContent = "Free";
    } else {
        delivery = 40;
        delAmount.textContent = "₹40";
    }

    let discount = 0;

    const coupon = localStorage.getItem("coupon");

    if (coupon === "CAMPUS20") {

        discount = 40;
        disAmount.textContent = "-₹40";

    } else {

        discount = 0;
        disAmount.textContent = "₹0";
    }



    const totalPri = total + delivery - discount;

    totalAmount.textContent = "₹" + totalPri;




}
calculate();

const couponInput = document.getElementById("couponInput");
const couponBtn = document.getElementById("couponBtn");
const couponMessage = document.getElementById("couponMessage");


if (couponBtn) {

    couponBtn.addEventListener("click", function () {

        const couponCode = couponInput.value.trim().toUpperCase();

        if (couponCode === "CAMPUS20") {

            couponBtn.textContent = "Applied";
            couponBtn.style.background = "green";
            couponBtn.style.color = "white";

            // Save coupon
            localStorage.setItem("coupon", "CAMPUS20");
            localStorage.setItem("couponDiscount", "40");

            calculate();

        } else {

            couponBtn.textContent = "Invalid";
            couponBtn.style.background = "red";
            couponBtn.style.color = "white";

            localStorage.removeItem("coupon");
            localStorage.removeItem("couponDiscount");

            calculate();
        }

    });

}





