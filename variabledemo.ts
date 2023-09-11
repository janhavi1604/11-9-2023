let mynumber:number
mynumber=10
let mystring:string
mystring="Hello"
let istrue:boolean=true

enum Month{
    jan="January",
    feb="February",
    march="March",
    april="April",
    may="May",
    june="June"

}

var month=Month.jan
console.log(month)


var myvar=undefined
console.log(myvar)


var myvar1:any
myvar1=10
console.log(myvar1)
myvar1="Hello world"
console.log(myvar1)






var myvar2:null
console.log(myvar2)
//array
var myarray:string[]=["Router","Modem","Teleprinter","RJ45 Cables","Server"]
console.log(myarray[3])


//tuple
//add readonly if you dont want to push new value
let mytuple: [number,string,boolean,any]
mytuple=[12,'Hello',true,100]
console.log(mytuple)
mytuple.push(100)
console.log(mytuple)



//Practice question

//1. Calculate circle

var r:number
r=20
console.log(3.14*r**2)

//2. calculate simple interst

var p:number
var r:number
var n:number
p=20
r=10
n=50
console.log((p*r*n)/100)


//3. area of tringle

var base:number
var height:number
base=50
height=30
console.log((base*height)/2)


//4. Calculate speed of vehicle

var dist:number
dist=100
var time:number
time=10
console.log(dist/time)

//5.Create an array

var names:string[]=["Peter","Max","Sam","Dale","Tom"]
console.log(names[3])


//6. Create Tuple

let mynewtuple: readonly[number,number,string,string,number,string,boolean,boolean,number]
mynewtuple=[12,11,'Hello','Max',400,'Peter',true,false,100]
console.log(mytuple)
//mynewtuple.push(100)
//console.log(mynewtuple)


function calc(a:number,b:number,c:number):number{
    return a*b*c
}

console.log(calc(12,23,34))



let calculate=function(a:number,b:number,c:number):number{
    return a*b*c
}

console.log(calculate(12,34,15))

//It is only a number array ...injecticting typescripting in js
const sumarray=function(...a:number[]):number{
     let sum=0
    for(let x of a)
    {
        
        sum+=x
    }
    return sum

}
console.log(sumarray(12,14,15,16))

//Lambda funcation
const simple_interest=(a:number,b:number,c:number)=>a*b*c/100

console.log(simple_interest(12000,2,3))


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
const strlen=(str:String)=>str.length
console.log(strlen('Hello'))


//calculate largest of two numbers passed to lambda expression

const lar=(num1:number,num2:number)=>num1>num2?num1:num2
console.log(lar(12,10))

//4.Write a lambda expression to find largest value in an array 
//*use rest parameter and reduce function

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
const largest=(numbers:number[])=>numbers.reduce
console.log(largest(numbers))
console.log(numbers)


//Public and private
class Person
{
    personname:string
    emailid:string
    private phoneno:string

    constructor(personname:string,emailid:string,phoneno:string)
    {
        this.personname=personname;
        this.emailid=emailid;
        this.phoneno=phoneno;
        console.log(phoneno)
    }

   

}
let person=new Person("Peter","peter@gmail.com","99874125460")
console.log(person)
console.log(person.personname)
console.log(person.emailid)

//protected
class Person1
{
    protected personname:string
    protected emailid:string
    

   
   

}

class Manager extends Person1
{
    displayDetails(personname:string,emailid:string)
    {
        this.personname=personname
        this.emailid=emailid
        let persondetails=`Person Name ${this.personname} Email id ${this.emailid}`
        console.log(persondetails)
    }

}

class Salesmanager extends Manager{
    displayDetails(personname: string, emailid: string): void {
        this.personname=personname
        this.emailid=emailid
        let salesmanager=`Sales Manaher name ${this.personname} Email Id ${this.emailid}`
        console.log(salesmanager)
    }
}
let salesmanager:Manager=new Salesmanager()

salesmanager.displayDetails("Peter","peter@gmail.com")


// practice qusetion for class

class Employee
{
    firstname:string
    lastname:string
    department:string

    constructor(firstname:string,lastname:string,department:string)
    {
        this.firstname=firstname
        this.lastname=lastname
        this.department=department
    }
    calculatebonus()
    {
        let employeeDetails=`First Name ${this.firstname} Last Name ${this.lastname} department ${this.department}`

        console.log(employeeDetails)
        var bonus:number
        bonus=300
        console.log(bonus)
    }
}

class Manager1 extends Employee
{
    constructor(firstname:string,lastname:string,department:string)
    {
 super(firstname,lastname,department)
    }

    calculatebonus()
    {
        let managerDetails=`First Name ${this.firstname} Last Name ${this.lastname} department ${this.department}`

        console.log(managerDetails)
        var bonusmanager:number
        bonusmanager=400
        console.log(bonusmanager)

    }

}

class Engineer extends Employee
{
    constructor(firstname:string,lastname:string,department:string)
    {
 super(firstname,lastname,department)
    }

    calculatebonus()
    {
        let EngineerDetails=`First Name ${this.firstname} Last Name ${this.lastname} department ${this.department}`

        console.log(EngineerDetails)
        var bonusengineer:number
        bonusengineer=500
        console.log(bonusengineer)

    }


}


class LineStaff extends Employee
{

    constructor(firstname:string,lastname:string,department:string)
    {
 super(firstname,lastname,department)
    }

    calculatebonus()
    {
        let LineStaffDetails=`First Name ${this.firstname} Last Name ${this.lastname} department ${this.department}`

        console.log(LineStaffDetails)
        var bonuslinestaff:number
        bonuslinestaff=600
        console.log(bonuslinestaff)

    }



}

//function Displaydetails(e:Employee)
  {
 //    e.calculatebonus
  }

//let manager:Employee=new Manager1("Peter","Max","sales")

//Displaydetails(manager)


function calculateValue(a?:number,b?:number):any
{
    if(a!=null && b!=null)
    {
        return a+b
    }
    else
    {
        return "no values passed"
    }
}

calculateValue()

