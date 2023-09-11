var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var book = {
    "One fine Monday morning": "Erric shaw",
    "Jack goes to school": "Tommy Brown",
    "price": 100,
    "available": true,
    publisher: "Blue berry books"
};
console.log(book);
var books = [{
        bookName: "One fine day",
        authorName: "Peter dame",
        price: 200
    },
    {
        bookName: "Erric day",
        authorName: "Erric Las",
        price: 150
    }];
var items = [{
        itemName: "Coffee",
        price: 50
    },
    {
        itemName: "tea",
        price: 20
    }];
console.log(items);
var student = [{
        firstName: "Peter",
        lastName: "Jones",
        subject: "Maths"
    },
    {
        firstName: "Chris",
        lastName: "Luwis",
        subject: "Science"
    }];
console.log(student);
var device = {
    devicename: "Laptop",
    personallocatedto: "max"
};
console.log(device);
//Ducktyping
var Dog = /** @class */ (function () {
    function Dog() {
        this.sound = "bark";
    }
    return Dog;
}());
var Lion = /** @class */ (function () {
    function Lion() {
        this.sound = "Roar";
    }
    return Lion;
}());
var Goat = /** @class */ (function () {
    function Goat() {
        this.sound = "bleat";
    }
    Goat.prototype.swim = function () {
        console.log("cant swim");
    };
    return Goat;
}());
//let goat:Goat=new Lion()  will not match
var lion = new Goat();
console.log(lion.sound);
var shapes = {
    side: 4,
    area: 0,
    shapeName: "square",
    color: "red"
};
console.log(shapes);
var Graphics = /** @class */ (function () {
    function Graphics() {
    }
    Graphics.prototype.setcolor = function () {
        this.color = "red";
    };
    return Graphics;
}());
var Twoshape = /** @class */ (function (_super) {
    __extends(Twoshape, _super);
    function Twoshape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Twoshape;
}(Graphics));
var twoshape = new Twoshape();
twoshape.sides = 4;
twoshape.area = twoshape.sides * twoshape.sides;
twoshape.shapename = "square";
console.log(twoshape);
var message = {
    messagelength: "4",
    message: "Hello how r u",
    callerNumber: "741256347",
    callDuration: "40 min"
};
console.log(message);
//let tickets: Ticket[] = [
// { source: "Pune", destination: "Mumbai" },
//{ source: "Delhi", destination: "Chennai" },
//];
var tickets = [
    { source: "Pune", destination: "Mumbai" },
    { source: "Delhi", destination: "Chennai" },
];
// using forEach method
tickets.forEach(function (ticket) {
    console.log(ticket.source, ticket.destination);
});
