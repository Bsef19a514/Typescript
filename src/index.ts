//to compile a typescript file run 
//tsc filename

//to initialize a typescript project run
//tsc --init //this will download the tsconfig.js file which will contain the configuration settings of your project and envronment.

let num: number = 10;
console.log(num);

// DATA TYPES IN JS
// null
// undefined
// number
// boolean
// string
// object

// DATA TYPES IN TS
// any
// never
// tuple
// enum
// unknown

//In Ts variables are statically types means the datatype is checked at compile time like c++, java etc.
//we don't have to explicitly mention the type of varible in Ts. the TS compiler automatically infer the type of varible based on the value provides. 

let nam:string="zain"
let student="ali"

//what about this:
let temp;
//When we declare a variable but don't initialize it the TS compiler will assumes the type of this variable is "any"
//So we can assign such variable a number and later on a string like in simple Js. So we should avoid using "any" type.
temp=123;
temp="asim"


 
let funct1=(numb)=>{
    console.log(numb);
    
}

// ARRAYS IN TS

let numArr=[1,2,'3',true]; //like js
let numArr2=[1,2,3]; //same as js
//let numArr3:number[]=[1,2'3',false]; //the errors are becausee we have explicitle mentioned here than the type of array in number

// let numArr4=[]; //datatype of empty array in Ts in "never[]"
// numArr4[0]=1;
// numArr4[1]='2';

let numArr5:(string | number | boolean)[]=[];
numArr5[0]='zain';
numArr5[1]=2;
numArr5[2]=true;

// Tuples in TS (an array whose size is two)
let t1:[number,string]=[1,"zain"];
//but we can do so
t1.push(514); //we can push more elements into a tuple so we should avoid doing so

// Enum in Ts
const enum Size  {Small=10,Medium=20,Large=30}; //by default the values will be assigned as Small=0, Medium=1 and so on.

let mySize:Size=Size.Medium;
console.log(mySize);

//Functions in Ts

function sum(n1:number,n2:number):number{
    return n1+n2;
}
console.log(sum(1,2));

function increment(n1:number,n2?:number):number{ //function with optional parameter
    return n1+(n2||1);
}
console.log(increment(10,2));
console.log(increment(10));

function multiply(n1:number,n2=2):number{ //with default parameter value
    return n1*n2;
}
console.log(multiply(2,3));
console.log(multiply(2));

// objects in Ts

let employee:{
    //type annotations
    readonly id:number, //readonly specifies that id cant be changed later on. it can only be accessed.
    name:string,
    email?:string, //optional property
    baseSalary:number,
    salary:(basicSal:number)=> number  //salary is a method whose return typre in number
}=
{
    id:1,
    name:"zain",
    baseSalary:1000,
    salary:(basicSal:number)=>{
        return basicSal*10;
    }
}
console.log(employee);
// This is not a good approach as if you were to create 2 or multiple employee objects you have to repeact the code  (type annotations)of crearing employee object


// Type alias
type Employee={
    readonly id:number, //readonly specifies that id cant be changed later on. it can only be accessed.
    name:string,
    email?:string, //optional property
    baseSalary:number,
    salary:(basicSal:number)=> number
}

let e1:Employee={
    id:2,
    name:"zarar",
    baseSalary:2000,
    salary:(basicSal:number)=>{
        console.log(basicSal);
        return basicSal*10;
    }
}
console.log(e1);

let e2:Employee={
    id:3,
    name:"asim",
    baseSalary:1000,
    salary:(basicSal:number)=>{
        console.log(basicSal);
        return basicSal*10;
    }
}
console.log(e2);
