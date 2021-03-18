import {select} from '../settings.js';
import AmountWidget from './AmountWidget.js';

class CartProduct {
  constructor(menuProduct, element) {
    const thisCartProduct = this;
    thisCartProduct.id = menuProduct.id;
    thisCartProduct.name = menuProduct.name;
    thisCartProduct.amount = menuProduct.amount;
    thisCartProduct.priceSingle = menuProduct.priceSingle;
    thisCartProduct.priceTotal = menuProduct.priceTotal;
    thisCartProduct.params = menuProduct.params;

    thisCartProduct.getElements(element);
    //console.log(thisCartProduct);
    thisCartProduct.initAmountWidget();
    thisCartProduct.initActions();
  }
  getElements(element) {
    const thisCartProduct = this;
    thisCartProduct.dom = {};
    thisCartProduct.dom.wrapper = element;
    thisCartProduct.dom.amountWidget = element.querySelector(select.cartProduct.amountWidget);
    thisCartProduct.dom.price = element.querySelector(select.cartProduct.price);
    thisCartProduct.dom.edit = element.querySelector(select.cartProduct.edit);
    thisCartProduct.dom.remove = element.querySelector(select.cartProduct.remove);
  }
  initAmountWidget() {
    const thisCartProduct = this;
    thisCartProduct.amountWidget = new AmountWidget(thisCartProduct.dom.amountWidget);
    thisCartProduct.calculateCartProductPrice();
    thisCartProduct.dom.amountWidget.addEventListener('updated', function() {
      thisCartProduct.calculateCartProductPrice();
    });
  }

  calculateCartProductPrice(thisCartProduct) {
    thisCartProduct = this;
    thisCartProduct.amount = thisCartProduct.amountWidget.value;
    thisCartProduct.price = thisCartProduct.priceSingle * thisCartProduct.amount;
    thisCartProduct.dom.price.innerHTML = thisCartProduct.price;
  }
  getData(){
    const thisCartProduct = this;
    const prod = {};
    prod.id = thisCartProduct.id;
    prod.amount = thisCartProduct.amount;
    prod.price = thisCartProduct.price;
    prod.priceSingle = thisCartProduct.priceSingle;
    prod.name = thisCartProduct.name;
    prod.params = thisCartProduct.params;

    return prod;
  }
  remove() {
    const thisCartProduct = this;

    const event = new CustomEvent('remove', {
      bubbles: true,
      detail: {
        cartProduct: thisCartProduct,
      },
    });
    thisCartProduct.dom.wrapper.dispatchEvent(event);
  }
  initActions() {
    const thisCartProduct = this;
    thisCartProduct.dom.edit.addEventListener('click', function(event) {
      event.preventDefault();
    });
    thisCartProduct.dom.remove.addEventListener('click', function(event) {
      event.preventDefault();
      thisCartProduct.remove();
    });
  }
}

export default CartProduct;