//Read the README.md file

//chalenge 1

let greeting: string = "hello, typescript!";
greeting = greeting.toUpperCase();

let age: number = 25;

age = age + 5;

let isAdult: boolean = age >= 18;
console.log(isAdult);
isAdult = !isAdult;
console.log(isAdult);

greeting = 10;
age = "thirty";
isAdult = "yes";

console.log(greeting, age, isAdult);

//challenge 2

let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "processing";
orderStatus = "shipped";
orderStatus = "delivered";

console.log(orderStatus);

let discount: number | string = 20;
discount = "20%";

console.log(discount);

let haha: string | undefined; //in this even if the variable is undefined , there will be no problem

let bb: any = "jk";
//let vall:[]=[w,2,]

//challenge 3

const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook?.length);

let temperatures: number[] = [32, 54, 2, 32];
//temperatures.push('hot')

let averageTemperature: number =
  temperatures.reduce((total, current) => total + current, 0) /
  temperatures.length;
console.log(averageTemperature);

let fruits: string[] = ["apple", "banana", "orange"];
let fruit: string = fruits[Math.floor(Math.random() * fruits.length)];

let colors: string[] = ["red", "blue"];
//colors.push(true)

let mixedArray: (number | string)[] = [1, 2, 3, 4];

//challenge 4

let bike: { brand: string; year: number } = { brand: "kawasaki", year: 2024 };
bike.year = "two";

let laptop: { brand: string; year: number } = { brand: "dell", year: 2024 };
let laptop2: { brand: string; year: number } = { brand: "hp" };

let product1 = { title: "pll", price: 345 };
let product2 = { title: "pllew" };
let products: { title: string; price?: number }[] = [product1, product2];
products.push({ title: "ghd", price: "expensive" });

//challenge 5

let names: string[] = ["arun", "sam"];

// function checkName(name:string):boolean{
//     if(names.indexOf(name))
//         return true
//     else
//         return false

// }

function checkName2(name: string): boolean {
  return names.includes(name);
}

const nameResult = checkName2("sam");
console.log("the result is " + nameResult);

//challenge 5

function processInput(parameter: string | number): string {
  if (typeof parameter === 'number') {
    let result = 2 * parameter;
    return `the result is ${result}`;
  }
  else{
    return parameter.toUpperCase()
  }
}

console.log(processInput(10));

console.log(processInput("hello"));
