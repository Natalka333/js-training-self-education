
// ********************Функция как значение*******************
// Значение функции (ссылка на нее) можно хранить в переменной или передавать в качестве аргумента в другую функцию.

// function  greet ( name ) {
//    return  `Welcome ${name} !` ;
// }

// // Вызываем функцию greet и выводим результат в консоль
// console . log (greet( "Mango" )); // "Welcome Mango!"

// // Выводим функцию greet в консоль, не вызывая ее
// console . log (greet); // ƒ greet() {return `Welcome ${name}!`}


// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza();
// const pointer = makePizza;


// ************  Колбек-функции    ************


// Функция обратного вызова (callback, колбек)  — это функция, которая передается другой функции в качестве аргумента, а та в свою очередь использует передаваемую функцию.


// Функция высшего порядка (high order function)  — функция, принимающая в качестве параметров другие функции или возвращает функцию в качестве результата.
// В примере это функция registerGuest, потому что она ожидает другую функцию как параметр и вызывает ее.



// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// registerGuest("Mango", greet); // "Registering Mango!"
//  // "Welcome Mango!"

// registerGuest("Mango", notify); // "Registering Mango!"
// // "Dear Mango, your room will be ready in 30 minutes"


// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }


// ************  Инлайн-колбеки    ************
// Якщо колбек-функція маленька і потрібна тільки для передачі аргументом, її можна оголосити безпосередньо на момент виклику функції, в яку передаємо колбек. 