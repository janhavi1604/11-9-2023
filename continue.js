function calculatevalue(a, b) {
    if (a != null && b != null) {
        return a + b;
    }
    else {
        return "no values passed";
    }
}
console.log(calculatevalue());
console.log(calculatevalue(12, 23));
function calculate_si(principle, rate, time) {
    if (rate != null && time != null) {
        return principle * time * rate / 100;
    }
    else {
        return principle * 3 * 2 / 100;
    }
}
console.log(calculate_si(12000));
console.log(calculate_si(12000, 5, 7));
//Constructor overloading(Image)
var Add = /** @class */ (function () {
    function Add() {
    }
    return Add;
}());
//constructor overloading
var Ticket = /** @class */ (function () {
    function Ticket(source, destination) {
        if (source != null || destination != null) {
            this.source = source;
            this.destination = destination;
        }
        else {
            this.source = "Chennai";
            this.destination = "Banglore";
        }
    }
    return Ticket;
}());
var obj1 = new Ticket("Pune", "Mumbai");
var obj2 = new Ticket("Chennai", "Delhi");
var obj3 = new Ticket();
console.log(obj1);
console.log(obj2);
console.log(obj3);
