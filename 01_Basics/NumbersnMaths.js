let num=52
console.log(num);


const num2=new Number (21)
console.log(num2);

console.log(num2.toString().length);
console.log(num2.toFixed(2));//Use toFixed while developing e-commerce app

const num3= 123.567
console.log(num3.toPrecision(3));

const num4=1000000000
console.log(num4.toLocaleString('en-US'));

console.log(Math.round(num3));

console.log(Math.random());
let max=52;
let min=21;
console.log(Math.floor(Math.random()*(max-min+1)+min));//Random number 
