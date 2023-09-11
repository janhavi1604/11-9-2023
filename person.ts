
//interface person{

    //firstName:string
   //readonly  emailId:string
  //  phone?:number

//}

//let manager:Person={
    //firstName:"Peter",
  //  emailId:"peter@gmail.com"
//}


//manager.firstName="Peter chan"


interface fruits{
    [index:string]:number|string,  //indexer
    length:number
    name:string
}

let fruitlist:fruits={
    length:0,
    name:"fruits"

}

interface ststes{
    [index:number]:boolean
}

//let s:States=[true,false,true,true,false]
//console.log(s[0])
//console.log(s[1])
//console.log(s[2])



interface fruits{
    [index:number]:string
}

let fruitlist1:fruits=["Apple","Mango","Banaa","Strawberry"]
console.log(fruitlist1[0])