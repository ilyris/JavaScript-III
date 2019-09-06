/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first principle is the global binding.
* 2. The second principle is implicit binding, which is using this to refer to our own object. instead of the global object. What I mean is that we use this to refer to
something that we have created.
* 3. The third principle is new binding, where we can use the this keyword to refer to the object that we have created, but what makes this different is that every time a "NEW"
object is created, this will be refering to the new object and its properties instead of the blueprint of the object.
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function windowBindingThis(string) {
    console.log(string);
    console.log(this);
}
windowBindingThis("here is the window object!");

// Principle 2

// code example for Implicit Binding
const Car = {
    make: 'Nissan',
    model: 'Altima',
    year: '2014',
    start: function() {
        return `This ${this.make} ${this.model} has started, vroom vroom`;
    }
}

console.log(Car.start());

// Principle 3

// code example for New Binding
function Payment(paymentType, paymentTotal, taxes) {
    this.paymentType = paymentType;
    this.paymentTotal = paymentTotal;
    this.taxes = taxes;
    this.paid = function() {
        return `This payment was made with ${this.paymentType} for a total of $${paymentTotal}, with the taxes amount equaling out to ${this.taxes}`;
    }
}

const orderId1 = new Payment("Visa", "24.00", "4.00");
console.log(orderId1.paid());
// Principle 4

// code example for Explicit Binding

