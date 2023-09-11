function createPair(key, value) {
    return [key, value];
}
var info = createPair(1, "Peter Sam");
var info2 = createPair(2, "Edgar Mathew");
console.log(info, info2);
var Data = /** @class */ (function () {
    function Data(_value) {
        this._value = _value;
    }
    Data.prototype.getValue = function () {
        return this._value;
    };
    Data.prototype.setValue = function (_value) {
        this._value = _value;
    };
    Data.prototype.toString = function () {
        return "Value: $(this._value)";
    };
    return Data;
}());
var value = new Data("hello world");
console.log(value.toString());
var value1 = new Data(100);
var value2 = new Data(true);
console.log(value1.toString());
console.log(value2.toString());
var employee = {
    key: 1,
    value: "Peter"
};
var fruit = {
    key: "Apple",
    value: 100
};
var stock = {
    key: "Coffee",
    value: true
};
var Person = /** @class */ (function () {
    function Person(firstname, lastname, emailid) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.emailid = emailid;
    }
    return Person;
}());
var authentication = {
    userId: new Person("Peter", "Jones", "peter@gmail.com"),
    password: "peter123"
};
console.log(authentication);
// Implement the interface with a generic class
var Stack = /** @class */ (function () {
    // Initialize an empty stack
    function Stack() {
        this.items = [];
    }
    // Push an item to the top of the stack
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    // Pop and return the top item from the stack
    Stack.prototype.pop = function () {
        if (this.items.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.items.pop();
    };
    return Stack;
}());
// Create a stack of numbers
var numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(numberStack.pop()); // 3
console.log(numberStack.pop()); //2
console.log(numberStack.pop()); // 1
// Create a stack of strings
var stringStack = new Stack();
stringStack.push("a");
stringStack.push("b");
stringStack.push("c");
console.log(stringStack.pop()); // c
console.log(stringStack.pop()); // b
console.log(stringStack.pop()); //a
