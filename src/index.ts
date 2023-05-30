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
t1.push(514); //we can push more elements into a tuple

// Enum in Ts
enum size  {Small=1,Large,Medium};