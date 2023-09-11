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
var mynumber;
mynumber = 10;
var mystring;
mystring = "Hello";
var istrue = true;
var Month;
(function (Month) {
    Month["jan"] = "January";
    Month["feb"] = "February";
    Month["march"] = "March";
    Month["april"] = "April";
    Month["may"] = "May";
    Month["june"] = "June";
})(Month || (Month = {}));
var month = Month.jan;
console.log(month);
var myvar = undefined;
console.log(myvar);
var myvar1;
myvar1 = 10;
console.log(myvar1);
myvar1 = "Hello world";
console.log(myvar1);
var myvar2;
console.log(myvar2);
//array
var myarray = ["Router", "Modem", "Teleprinter", "RJ45 Cables", "Server"];
console.log(myarray[3]);
//tuple
//add readonly if you dont want to push new value
var mytuple;
mytuple = [12, 'Hello', true, 100];
console.log(mytuple);
mytuple.push(100);
console.log(mytuple);
//Practice question
//1. Calculate circle
var r;
r = 20;
console.log(3.14 * Math.pow(r, 2));
//2. calculate simple interst
var p;
var r;
var n;
p = 20;
r = 10;
n = 50;
console.log((p * r * n) / 100);
//3. area of tringle
var base;
var height;
base = 50;
height = 30;
console.log((base * height) / 2);
//4. Calculate speed of vehicle
var dist;
dist = 100;
var time;
time = 10;
console.log(dist / time);
//5.Create an array
var names = ["Peter", "Max", "Sam", "Dale", "Tom"];
console.log(names[3]);
//6. Create Tuple
var mynewtuple;
mynewtuple = [12, 11, 'Hello', 'Max', 400, 'Peter', true, false, 100];
console.log(mytuple);
//mynewtuple.push(100)
//console.log(mynewtuple)
function calc(a, b, c) {
    return a * b * c;
}
console.log(calc(12, 23, 34));
var calculate = function (a, b, c) {
    return a * b * c;
};
console.log(calculate(12, 34, 15));
//It is only a number array ...injecticting typescripting in js
var sumarray = function () {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, a_1 = a; _a < a_1.length; _a++) {
        var x = a_1[_a];
        sum += x;
    }
    return sum;
};
console.log(sumarray(12, 14, 15, 16));
//Lambda funcation
var simple_interest = function (a, b, c) { return a * b * c / 100; };
console.log(simple_interest(12000, 2, 3));
// Prcatice questions2
// create lambda functions for below oprations
//1. length of array passed to lambda expression
//var a:number[]
//a=[1,2,3,4]
//const arraylen=(...arr:number[])=>arr.length
//console.log(...arr([1,2,3,4]))
//2..display length of string passed to lambda expression
//var str:String
//str="Hello"
var strlen = function (str) { return str.length; };
console.log(strlen('Hello'));
//calculate largest of two numbers passed to lambda expression
var lar = function (num1, num2) { return num1 > num2 ? num1 : num2; };
console.log(lar(12, 10));
//4.Write a lambda expression to find largest value in an array 
//*use rest parameter and reduce function
var numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
var largest = function (numbers) { return numbers.reduce; };
console.log(largest(numbers));
console.log(numbers);
//Public and private
var Person = /** @class */ (function () {
    function Person(personname, emailid, phoneno) {
        this.personname = personname;
        this.emailid = emailid;
        this.phoneno = phoneno;
        console.log(phoneno);
    }
    return Person;
}());
var person = new Person("Peter", "peter@gmail.com", "99874125460");
console.log(person);
console.log(person.personname);
console.log(person.emailid);
//protected
var Person1 = /** @class */ (function () {
    function Person1() {
    }
    return Person1;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Manager.prototype.displayDetails = function (personname, emailid) {
        this.personname = personname;
        this.emailid = emailid;
        var persondetails = "Person Name ".concat(this.personname, " Email id ").concat(this.emailid);
        console.log(persondetails);
    };
    return Manager;
}(Person1));
var Salesmanager = /** @class */ (function (_super) {
    __extends(Salesmanager, _super);
    function Salesmanager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Salesmanager.prototype.displayDetails = function (personname, emailid) {
        this.personname = personname;
        this.emailid = emailid;
        var salesmanager = "Sales Manaher name ".concat(this.personname, " Email Id ").concat(this.emailid);
        console.log(salesmanager);
    };
    return Salesmanager;
}(Manager));
var salesmanager = new Salesmanager();
salesmanager.displayDetails("Peter", "peter@gmail.com");
// practice qusetion for class
var Employee = /** @class */ (function () {
    function Employee(firstname, lastname, department) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.department = department;
    }
    Employee.prototype.calculatebonus = function () {
        var employeeDetails = "First Name ".concat(this.firstname, " Last Name ").concat(this.lastname, " department ").concat(this.department);
        console.log(employeeDetails);
        var bonus;
        bonus = 300;
        console.log(bonus);
    };
    return Employee;
}());
var Manager1 = /** @class */ (function (_super) {
    __extends(Manager1, _super);
    function Manager1(firstname, lastname, department) {
        return _super.call(this, firstname, lastname, department) || this;
    }
    Manager1.prototype.calculatebonus = function () {
        var managerDetails = "First Name ".concat(this.firstname, " Last Name ").concat(this.lastname, " department ").concat(this.department);
        console.log(managerDetails);
        var bonusmanager;
        bonusmanager = 400;
        console.log(bonusmanager);
    };
    return Manager1;
}(Employee));
var Engineer = /** @class */ (function (_super) {
    __extends(Engineer, _super);
    function Engineer(firstname, lastname, department) {
        return _super.call(this, firstname, lastname, department) || this;
    }
    Engineer.prototype.calculatebonus = function () {
        var EngineerDetails = "First Name ".concat(this.firstname, " Last Name ").concat(this.lastname, " department ").concat(this.department);
        console.log(EngineerDetails);
        var bonusengineer;
        bonusengineer = 500;
        console.log(bonusengineer);
    };
    return Engineer;
}(Employee));
var LineStaff = /** @class */ (function (_super) {
    __extends(LineStaff, _super);
    function LineStaff(firstname, lastname, department) {
        return _super.call(this, firstname, lastname, department) || this;
    }
    LineStaff.prototype.calculatebonus = function () {
        var LineStaffDetails = "First Name ".concat(this.firstname, " Last Name ").concat(this.lastname, " department ").concat(this.department);
        console.log(LineStaffDetails);
        var bonuslinestaff;
        bonuslinestaff = 600;
        console.log(bonuslinestaff);
    };
    return LineStaff;
}(Employee));
//function Displaydetails(e:Employee)
{
    //    e.calculatebonus
}
//let manager:Employee=new Manager1("Peter","Max","sales")
//Displaydetails(manager)
function calculateValue(a, b) {
    if (a != null && b != null) {
        return a + b;
    }
    else {
        return "no values passed";
    }
}
calculateValue();
