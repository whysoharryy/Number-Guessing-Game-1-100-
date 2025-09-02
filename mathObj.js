//Various Math Properties
//Math.PI, Math.E, Math.log(x), Math.sqrt(x), Math.round(x), Math.ceil(x), Math.floor(x)
//Math.trunc(x) : Removes decimal part
//Math.abs(x), Math.pow(x,y), Math.max(a,b,c..,z) ,Math.min(6,3,1,2), Math.sin(x), Math.random()

//Generate random integer
let num=Math.random();  
num=num*10;     //if to print between 0 to 10 multiply with maximum no. but you dont get 10
num=Math.floor(num);    //Removes decimal part
num=num+1;  //now range is 1 to 10 

console.log(num);
// let random=Math.floor(Math.random()*10)+1;

//To print between 1 to 25
let random=Math.floor(Math.random()*25)+1;
console.log(random);

