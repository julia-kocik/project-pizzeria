import {templates} from '../settings.js';

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
  }
}

export default Booking;