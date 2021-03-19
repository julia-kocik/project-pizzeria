import {select, templates} from '../settings.js';
import AmountWidget from './AmountWidget.js';

class Booking {
  constructor(element) {
    const thisBooking = this;
    thisBooking.render(element);
    thisBooking.initWidgets();
  }
  render(element) {
    const thisBooking = this;
    /* generate HTML based on template*/
    const generatedHTML = templates.bookingWidget();
    /* create empty object thisBooking.dom */
    thisBooking.dom = {};
    /* add to this object property wrapper and add reference to the container */
    thisBooking.dom.wrapper = element;
    /* add element to menu */
    element.innerHTML = generatedHTML;
    /* add to this object property people amount */
    thisBooking.dom.peopleAmount = element.querySelector(select.booking.peopleAmount);
    /* add to this object property hours amount */
    thisBooking.dom.hoursAmount = element.querySelector(select.booking.hoursAmount);
  }
  initWidgets() {
    const thisBooking = this;
    thisBooking.peopleAmount= new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.hoursAmount= new AmountWidget(thisBooking.dom.hoursAmount);
  }
}

export default Booking;