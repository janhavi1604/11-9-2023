interface Book{
    [index:string]:string|number|boolean
    publisher:string
}

let book:Book={
    "One fine Monday morning":"Erric shaw",
    "Jack goes to school":"Tommy Brown",
    "price":100,
    "available":true,
    publisher: "Blue berry books"
}
console.log(book)


interface Books{
    bookName:string,
    authorName:string,
    price:number
}

let books:Books[]=[{
    bookName:"One fine day",
    authorName:"Peter dame",
    price:200
},
{
    bookName:"Erric day",
    authorName:"Erric Las",
    price:150
}]


//Practice
//2.

interface Item
{
    itemName:string
    price:number
}

let items:Item[]=[{
    itemName:"Coffee",
    price:50
},
{
    itemName:"tea",
    price:20
}]
console.log(items)

//3.
interface Student
{
    firstName:string
    lastName:string
    subject:string
}

let student:Student[]=[{
    firstName:"Peter",
    lastName:"Jones",
    subject:"Maths"

},
{
    firstName:"Chris",
    lastName:"Luwis",
    subject:"Science"
}]



console.log(student)

//4. 
interface Device
{
    [index:string]:string|number|boolean
    devicename:string
    personallocatedto:string


}

let device:Device={
    devicename:"Laptop",
    personallocatedto: "max"
}

console.log(device)

//Ducktyping
class Dog{
    sound:string="bark"
}

class Lion
{
    sound:string="Roar"
}

class Goat
{
    sound:string="bleat"
    swim(){
        console.log("cant swim")
    }
}

//let goat:Goat=new Lion()  will not match

let lion:Lion =new Goat()
console.log(lion.sound)


//interface inheritance


//interface Shape
//{
  //  calculateArea():number
//}

//interface Figure extends Shape{
    //drawfigure():void{
      //  console.log("drawing figure")
    //}
//}


interface Shape{
    side:number
    area:number
    shapeName:string
}

interface Figure extends Shape{
     color:string
}

let shapes:Figure={
    side:4,
    area:0,
    shapeName:"square",
    color:"red"
}

console.log(shapes)


class Graphics
{  
    private rgb:number
    color:string
    setcolor(){
    this.color="red"
}
}

interface Shapes extends Graphics{
    sides:number
    area:number
    shapename:string
}


class Twoshape extends Graphics implements Shapes{
    sides:number
    area:number
    shapename:string
}


let twoshape=new Twoshape()
twoshape.sides=4
twoshape.area=twoshape.sides*twoshape.sides
twoshape.shapename="square"
console.log(twoshape)



//Ecercise


//1.  another interface Message contains attribute messageLength and message 

 //extends Message interface into Call and implement over an object 



interface Message 
{

    messagelength:string
    message:string
}

interface Call extends Message{
    callerNumber:string
    callDuration:string
}

let message:Call={
    messagelength:"4",
    message:"Hello how r u",
    callerNumber:"741256347",
    callDuration:"40 min"
}
console.log(message)


//2.

interface Ticket
{
    source:string
    destination:string
}


 //let tickets: Ticket[] = [
   // { source: "Pune", destination: "Mumbai" },
    //{ source: "Delhi", destination: "Chennai" },
  //];

  let tickets: Array<Ticket> = [
    { source: "Pune", destination: "Mumbai" },
    { source: "Delhi", destination: "Chennai" },
  ];


  
  // using forEach method
  tickets.forEach((ticket) => {
    console.log(ticket.source, ticket.destination);
  });
  