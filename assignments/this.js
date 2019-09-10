/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first principle is the global binding.

* 2. The second principle is implicit binding, which is using this to refer to our own object. instead of the global object. What I mean is, is implicit binding refers to what this is
in context to. If we create an object and log this, the "this" keyword will refer to the object that it is inside of.

* 3. The third principle is new binding, where we can use the this keyword to refer to the object that we have created, but what makes this different is that every time a "NEW"
object is created, this will be refering to the new object and its properties instead of the blueprint of the object. This can also be used to data bind the values passed in as
arguments to properties in the prototypes.

* 4.  Explicit binding is stating what we this to be refered through, through the use of functions.
Explicit Binding allows us to select what This should be referencing, as opposed to implicit binding, which is when This is referenced to what it is in context to.
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
const dylan = {
    name: "dylan",
}
const developerSkills = ["Html", "CSS", "JS", "React"];

function explicitBinding(param1) {
    return `${this.name} has mad ${param1} skills! `;
}
console.log(explicitBinding.apply(dylan, developerSkills));
// code example for Explicit Binding

