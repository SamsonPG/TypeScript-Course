//chalenge 1
let greeting: string = "hello, typescript!";
greeting = greeting.toUpperCase();

let age: number = 25;

age = age + 5;

let isAdult: boolean = age >= 18;
console.log(isAdult);
isAdult = !isAdult
console.log(isAdult);

greeting = 10
age='thirty'
isAdult = 'yes'

console.log(greeting,age,isAdult);
//challenge 2

let orderStatus: 'processing'|'shipped'|'delivered'='processing'
orderStatus= 'processing'
orderStatus='shipped'
orderStatus='delivered'

console.log(orderStatus);

let discount: number | string =20
discount = '20%'

console.log(discount);

let haha: string | undefined; //in this even if the variable is undefined , there will be no problem

