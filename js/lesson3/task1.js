// const mixed = [ 'apple' , 10 , true ]; // массив с элементами разных типов
// console.log(mixed[0]);


// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
//   const lastElement = fruits[fruits.length -1];
// console.log(lastElement);


// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// console.log(lastElementIndex); // 2

// console.log(planets[lastElementIndex]); // "Venus"


// function getExtremeElements(array) {
//   return [array[0], array[array.length -1]];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

// const array = [1, true, "Poly"];
// console.log(String(array));// "1,true,Poly"
// console.log(array + "5"); // "1,true,Poly5"

// console.log(Number([])); // 0
// console.log(Number([1])); // 1
// console.log(Number([1, 2, 3])); // NaN



// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];

// console.log(Boolean(emptyArray)); // true
// console.log(Boolean(nonEmptyArray)); // true

// if(emptyArray) {
// 	console.log("if is in progress")
// } else {
// 	console.log("else is not performed")
// }

// if(nonEmptyArray) {
// 	console.log("if is in progress")
// } else {
// 	console.log("else is not performed")
// }

// ********Метод join()***********
// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("-")); // 'JavaScript-is-amazing'

// ********Метод split()***********

// const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts); // ["amazing", "french", "recipes"]

// ********Метод slice()***********

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]


// ********Метод concat()***********

// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);

// console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];

// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Neptune"];

// console.log(firstArray.concat(secondArray, thirdArray));
// ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune'];

// console.log(firstArray.concat(thirdArray, secondArray));
// ['Mercury', 'Venus', 'Saturn', 'Neptune', 'Mars', 'Jupiter', ];


// ********Метод indexOf()***********
// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1


// ********Метод push()***********
// const planets = ["Earth", "Mars", "Venus"];

// planets.push("Jupiter");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// planets.push("Saturn", "Neptune");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]


// const tags = [];
// for(let i = 0; i < 3; i += 1) {
// 	tags.push(`tag-${i}`);
// }

// console.log(tags); // ["tag-0", "tag-1", "tag-2"]


// ********Метод includes()***********

// const planets = ["Earth", "Mars", "Venus"];

// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupiter")); // false

// const fruits = ["apple", "banana", "orange"];

// if (fruits.includes("banana")) {
//   console.log("The array has an element banana");
// } else {
//   console.log("Array does not contain banana element");
// }



// ********FOR***********
// for (let i = 0; i < array.length; i += 1) -ШаБЛОН


// ВАЖНО!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// i
// — это индекс
// array[i]
// — это элемент массива


// function getCommonElements(array1, array2) {
//   const newArr = [];
//   for(let i = 0; i < array1.length; i += 1) {
//     if(array2.includes(array1[i])) {
//       newArr.push(array1[i]);
//     }
//   }
//   return newArr;
// }


// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }
// "Earth", "Mars", "Venus"

// СОБРАТЬ ЭЛЕМЕНТЫ В МАССИВ

// const arr = [];

// for (...) {
//   if (...) {
//     arr.push(...);
//   }
// }

// return arr;

// ******** FOR ... of  ***********

// const planets = [ "Earth" , "Mars" , "Venus" ];

// for ( const planet of planets) {
//   console. log (planet);
// }


// **********ПСЕВДОМАССИВ**********


// function  multiply () {
//   let total = 0;
//   for (const arg of arguments) { "где arguments это (1, 2, 3)или (1, 2, 3, 4)
//     total += arg;
//   }
//   return total;
// }

// console.log(multiply(1, 2, 3));

// console.log(multiply(1, 2, 3, 4));

// console.log(multiply(1, 2, 3, 4, 5));



// если нужно аргументы перевести в массив для использования методов массива!

// function foo() {
   // В переменной args будет полноценный массив из всех аргументов 
//   const  args =Array.from(arguments);
// 	 return  args.join("-");
// }

// console.log(foo(1, 2, 3));
 // Вернет "1-2-3"

 
//  если не передали аргумент ,но есть параметр по умолчанию

// function  greet ( username = "Guest" ) {
//    console . log ( `Hello, ${username} !` ); 
// } 

// greet( "Jacob" ); // "Hello, Jacob!" 
// greet();         // "Hello, Guest!"



// Синтаксис объявления функции, который ты уже знаешь (function declaration ):

// function multiply( x , y , z) { 
//   console.log( x * y * z); 
// }



// Синтаксис функционального выражения (function expression ):

// const multiply = function ( x , y , z) { 
//   console.log( x * y * z); 
// };




