import {cart,removeFromCart}from '../data/cart.js';
import {products}from '../data/products.js';
import { formatCurrency } from './utils/money.js';

import{hello }from ' https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import{deliveryOptions}from'../data/deliveryOptions.js';

hello ();


const today =dayjs();
const deliveryDate = today.add(7, 'days');
deliveryDate.format('dddd,  MMMM D,  YYYY');



let cartSummaryHTML = '';
cart.forEach((cartItem) => {

	const productId = cartItem.productId;

	let matchingProduct ;

	

	products.forEach((product) => {

		if(product.id === productId){
			matchingProduct = product;
		}
	});

cartSummaryHTML += `
	<div class="cart-item-container js-cart-item-container" -"${matchingProduct.id}">
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="cart-item-image"
                src="${matchingProduct.image}" >

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  $${formatCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product = id>
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
               ${deliveryOptionsHTML(matchingProduct)}
              </div>
            </div>
          </div>

	`;
}
	
);

function deliveryOptionsHTML(matchingProduct){
  let htm = '';
deliveryOptions.forEach((deliveryOption) => {
  const today = dayjs();
  const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
  const dateString = deliveryDate.format('dddd, MMMM D');
  const priceString = deliveryOption.priceCents === 0
    ? 'FREE Shipping'
    : `$${formatCurrency(deliveryOption.priceCents)} - Shipping`;
          `
          html += 
    
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
            ${dateString}
            </div>
            <div class="delivery-option-price">
            ${priceString}
            </div>
          </div>
        </div>
        `

});
return html;


}


document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
console.log(cartSummaryHTML);

document.querySelectorAll('.js-delete-link').forEach((link) => {
	link.addEventListener('click', (event) => {
		link.dataset.productId;
	const productId =	console.log('delete clicked');
	console.log(productId);
	removeFromCart(productId);
	const container = document.querySelector(
		`.js-cart-item-container-${productId}`
	);
	});
	container.remove();

});