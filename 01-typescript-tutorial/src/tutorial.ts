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
  if (typeof parameter === "number") {
    let result = 2 * parameter;
    return `the result is ${result}`;
  } else {
    return parameter.toUpperCase();
  }
}

console.log(processInput(10));

console.log(processInput("hello"));

//challenge 6
function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") return input * 2;
  else
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
}

console.log(processData(2));
console.log(processData("helo"));
console.log(processData("helo2", { reverse: true }));

//challenge 7

type Employee = {id:number,name:string,department:string}

type Manager = {id:number,name:string,employees:Employee[]}

type Staff = Employee|Manager

function printStaffDetails(staff:Staff):void{
  if('employees' in staff)
    console.log(`${staff.name} is manager of ${staff.employees.length} employees`)
else
    console.log(`${staff.name} is an employee of ${staff.department}`)
}

const sam:Employee={id:23,name:'sa',department:'spo'}
const samss:Employee={id:323,name:'sams',department:'spo'}
const sag:Manager={id:23,name:'sag',employees:[sam,samss]}

printStaffDetails(sam)

printStaffDetails(sag)

//challenge 8
interface Computer{
  readonly id:number,
  brand:string,
  ram:number,
  storage?:number,
  upgradeRam(ramU:number):number,
}

const omen:Computer={
  id:123,
  brand:'asus', 
  ram:8,
  upgradeRam(ramU:number):number{
    this.ram +=ramU
    return this.ram
  }
}
omen.storage=256
console.log('the upgraded ram '+ omen.upgradeRam(4))
console.log(omen);

//challenge 9

function getEmployee(): Person | DogOwner | Manager2{

  const random = Math.random();
  
  if(random<0.33)
    {
      return{
        name:'john'
      }
    }
    else if (random<0.66){
      return{
        name:'jane',
        dogName:'max'
      }
    }
    else{
      return{
        name:'bob',
        managePeople(){
          console.log('managing people...')
        },
        delegateTasks(){
          console.log('delegating tasks...')
        }
      }
    }
  }


interface Person{
  name:string
}
interface DogOwner extends Person{
dogName:string
}
interface Manager2 extends Person{
managePeople():void,
delegateTasks():void
}


const employee: Person | DogOwner | Manager2= getEmployee();
console.log("random output");
console.log(employee);

//challenge 10

enum UserRole { Admin,Manager,Employee}
type User ={id:number,name:string,role:UserRole, contact:[string,string]}

function createUser(user:User):User{
return user
}

const Userr = createUser({id:3,name:'hfo',role:UserRole.Employee,contact:['em.com','54534']})
console.log(Userr);
