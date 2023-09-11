function createPair<S,T>(key:S,value:T):[S,T]{
    return [key,value]

}

let info=createPair<number,string>(1,"Peter Sam")
let info2=createPair<number,string>(2,"Edgar Mathew")

console.log(info,info2)



class Data<V>{
    private _value:V
    constructor(_value:V)
    {
        this._value=_value
    }

    public getValue():V{
        return this._value
    }

    public setValue(_value:V)
    {
        this._value=_value
    }

    public toString():string{
        return `Value: $(this._value)`


    }
}
    let value=new Data<String>("hello world")
    console.log(value.toString())

    let value1=new Data<number>(100)
    let value2=new Data<boolean>(true)

    console.log(value1.toString())
    console.log(value2.toString())



    interface Pair <K,V>{
        key:K,
        value:V
    }


    let employee:Pair<number,string>={
        key:1,
        value:"Peter"
    }

    let fruit:Pair<string,number>={
        key:"Apple",
        value:100



    }

    let stock:Pair<string,boolean>={
        key:"Coffee",
        value:true
    }


    class Person{
        firstname:string
        lastname:string
        emailid:string
        constructor(firstname:string,lastname:string,emailid:string)
        {
            this.firstname=firstname
            this.lastname=lastname
            this.emailid=emailid
        }
    }

    interface Authentication<K,V>
    {
        userId:K
        password:V
    }


    let authentication:Authentication<Person,String>={

         userId:new Person("Peter","Jones","peter@gmail.com"),
         password:"peter123"
    }
console.log(authentication)



//Stack

interface IStack<T> {
    push(item: T): void; 
    pop(): T; 
  }
  
  // Implement the interface with a generic class
  class Stack<T> implements IStack<T> {
    // Use an array to store the items in the stack
    private items: T[];
  
    // Initialize an empty stack
    constructor() {
      this.items = [];
    }
  
    // Push an item to the top of the stack
    push(item: T): void {
      this.items.push(item);
    }
  
    // Pop and return the top item from the stack
    pop(): T {
      if (this.items.length === 0) {
        throw new Error("Stack is empty");
      }
      return this.items.pop();
    }
  }

  // Create a stack of numbers
let numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log(numberStack.pop()); // 3
console.log(numberStack.pop()); //2
console.log(numberStack.pop()) // 1

// Create a stack of strings
let stringStack = new Stack<string>();
stringStack.push("a");
stringStack.push("b");
stringStack.push("c");
console.log(stringStack.pop()); // c
console.log(stringStack.pop()); // b
console.log(stringStack.pop());//a

