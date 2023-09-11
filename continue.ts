function calculatevalue(a?:number,b?:number):any
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

console.log(calculatevalue())
console.log(calculatevalue(12,23))


// Prototype

//function mycalc(a:number,b:number):number

//Creating overloading


function calculate_si(principle:number,rate:number,time?:number):number
function calculate_si(principle:number):number

function calculate_si(principle:number,rate?:number,time?:number):number{
    if(rate!=null && time !=null)
    {
        return principle*time*rate/100
    }
    else{
        return principle*3*2/100
    }

    
}

console.log(calculate_si(12000))
console.log(calculate_si(12000,5,7))



//Constructor overloading(Image)
class Add{



}





//constructor overloading

class Ticket
{
    source:any
    destination:any

    constructor()
    constructor(source:string,destination:string)
    constructor(source:string,destination:string)
    
    constructor(source?:any,destination?:any)
    {
        if(source!=null || destination!=null)
        {
            this.source=source
            this.destination=destination
        }
        else{
            this.source="Chennai"
            this.destination="Banglore"
        }
    }

}

let obj1:Ticket=new Ticket("Pune","Mumbai")
let obj2:Ticket=new Ticket("Chennai","Delhi")
let obj3:Ticket=new Ticket()

console.log(obj1)
console.log(obj2)
console.log(obj3)