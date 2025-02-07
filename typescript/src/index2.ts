
console.log("Hello World!!!");

let age:number=30;
// age="string"; number can't be assigned to string

const add=(a:number,b:number):number=>{
    return a+b;
}

let s=add(4,4)
console.log(s);


let myName:string="Rahul Kumar";// block level access

const API_VERSIOn:string="V2";// constant fixed values

var myAge:number=32;// myage number

console.log(myName,API_VERSIOn,myAge)

let myFavNumber:number=100;

let amount:number=33.00;

console.log(myFavNumber,amount.toFixed(2))

let myName1:string="Rahul";

console.log(myName1)

let myCity:string=`Bangalore -${myName1}`

console.log(myCity)

let authenticated:boolean=true;
if(authenticated){
    console.log("Authenticated..")
}

let num:any=34;
num="any type";
console.log(num)


const myFunction=():void=>{
    console.log("Void function")
}

myFunction()

let num2:unknown=23424;
if(typeof num2=== 'number'){
    console.log("it is number type")
}

let cityNames:string[]=["Gaya","Patna","Delhi"]
console.log(cityNames)
for(let city of  cityNames){
    console.log(city)
}

//tuple
type LoginForm=[string,string]

let loginForm:LoginForm=["email@example.com","rahul"]


function loginFormSubmit(loginForm:LoginForm):void{
    const[email,name]=loginForm;
    console.log(email,name)
}

loginFormSubmit(loginForm)


enum Category{
    Entertainment='entertainment',
    Movies='movies',
    Lifestyle='lifestyle',
    Food='food'
}

let selectedCategory:Category=Category.Lifestyle;
console.log(selectedCategory)


