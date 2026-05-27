
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

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// // Передаємо інлайн-функцію greet у якості колбека
// registerGuest("Mango", function greet(name) {
//   console.log(`Welcome ${name}!`);
// });

// // Передаємо інлайн-функцію notify у якості колбека
// registerGuest("Poly", function notify(name) {
//   console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// });



// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });


// ************  Метод forEach(callback)   ************
// Следует запомнить: метод `forEach(callback)` : 1) поэлементно перебирает массив; 2) вызывает колбек-функцию для каждого элемента массива; 3) возвращает `undefined`.


// array.forEach(function callback(element, index, array) {
//   // Тіло колбек-функції
// });

// Колбек-функція методу forEach() завжди отримує такі параметри: значення поточного елемента масиву element, його індекс index і власне посилання на вихідний масив array.


// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Index ${i}, value ${numbers[i]}`);
// }

// // Перебираючий метод forEach
// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });


// Єдиний випадок, коли варто використовувати цикли for або for...of для перебирання масиву, — це задачі з перериванням виконання циклу. Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця.
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (number) {
//     totalPrice += number;
//   });

//   return totalPrice;
// }


// function filterArray(numbers, value) {
//   const newArr = [];
//   numbers.forEach(function (number) {
//     if(number > value) {
//       newArr.push(number);
//     }
//   })
//   return newArr;
// }


// *******************  *Стрелочные функции  ******************

// Звичайне оголошення функції

// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Те саме стрілочною функцією

// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// const add = a => {
//   return a + 5;
// };


// const greet = () => {
//   console.log("Hello!");
// };

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// }


// *******************  явне повернення (explicit return).  ******************
// Запис із фігурними дужками

// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// *******************  неявне повернення (implicit return).  ******************
// Запис без фігурних дужок

// const add = (a, b, c) => a + b + c;
// const calculateTotalPrice = (quantity, pricePerItem) =>
// quantity * pricePerItem;


// В стрелочных функциях нет локальной переменной arguments, содержащей все аргументы. Если нужно собрать все аргументы в массив, употребляется операция rest.

// const  add = (... args ) => {
//   console.log( args );
// };

// add ( 1 , 2 , 3 ); // [1, 2, 3]


// const numbers = [2, 4, 5];

// numbers.forEach(function (number, index) {
//     console.log(`value${number}, index${index} `);
    
// });



// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Index ${index}, value ${number}`);
// };

// numbers.forEach(logMessage);


// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// }


//****************** * Методи map і flatMap *******************
  
// Чиста функція (pure function) — це функція, результат якої залежить тільки від значень переданих аргументів.
// чисті функції
//  не змінюють значень вихідних аргументів,
// 2) повертають один і той самий результат для однакових аргументів.

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// ********************ЧИСТАЯ ФУНКЦИЯ****************

// const changeEven = (numbers, value) => {
//   const newArr = [];

//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newArr.push(number + value);
//     } else {
//       newArr.push(number);
//     }
//   });

//   return newArr;
// };
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));




// Функція з побічними ефектами — це функція, яка в процесі
//  виконання може:

// змінювати або використовувати глобальні змінні
// змінювати значення аргументів посилального типу
// виконувати операції введення-виведення тощо

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);

// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]


// ************** Перебираючі методи ********************
// array.method(callback(currentValue, index, array))

// першим параметром буде значення поточного елемента масиву currentValue
// другим параметром буде індекс поточного елемента масиву index
// третім параметром буде посилання на сам вихідний масив array

// array.method((item, idx, arr) => {
//   // логіка, яка буде виконуватися на кожній ітерації
// });
// array.method(item => {
//   // логіка, яка буде виконуватися на кожній ітерації
// });




// ************** Метод map()*******************


// array.map((element, index, array) => {
//   // Тіло колбек-функції
// });
// Поелементно перебирає оригінальний масив
// Не змінює оригінальний масив
// Результат роботи колбек-функції записується в новий масив
// Повертає новий масив такої ж довжини, як і в масиву, до якого він був застосований

// const getUserEmails = (users) => {
//   return users.map(user => user.email);
// };


// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]


// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map(book => book.title);


// const genres = books.flatMap(book => book.genres);

// ************** Метод flatMap()*******************

// Метод flatMap(callback) аналогічний методу map(), але застосовується у випадках, коли результат — це багатовимірний масив, який необхідно «розгладити».

// array.flatMap((element, index, array) => {
//   // Тіло колбек-функції
// });

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const mappedCourses = students.map(student => student.courses);
// console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// const flattenedCourses = students.flatMap(student => student.courses);
// console.log(flattenedCourses) // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];


// **************  Метод filter()  *******************
// відбір усіх елементів з колекції за певним критерієм.
// Метод filter() повертає новий масив.

// array.filter((element, index, array) => {
//   // Тіло колбек-функції
// });
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]
// // до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]
// // до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []
// // до bigValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// Оригінальний масив values не змінився

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);


//*****************  Метод filter() на масиві об'єктів ******************

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Mango і Kiwi

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Ajax

// const average = students.filter(
//   (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);


// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter((user) => user.age > minAge && user.age < maxAge)
// };


//*****************  Метод find() ******************
// Метод find(callback) дозволяє знайти і повернути перший відповідний елемент, що задовольняє умову, після чого перебирання масиву припиняється.
//*********  шукає до першого збігу.*****************
// колбек повернув false, метод повертає undefined

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
// colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
// colorPickerOptions.find((option) => option.label === "white"); // undefined

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Tell-Tale Heart";
// const AUTHOR = "Robert Sheckley";

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);
// console.log(bookWithTitle);
// console.log(bookByAuthor);

// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };




//*****************  Метод every() ******************


// Метод every(callback) перевіряє, чи задовольняють усі елементи умову колбек-функції

// // Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every((value) => value >= 0); // true

// // Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false


// const products = [
// 	{ name: "apple", quantity: 2 },
// 	{ name: "orange", quantity: 5 },
// 	{ name: "plum", quantity: 0 },
// ];

// const hasEveryProduct = products.every(product => product.quantity > 0);
// console.log(hasEveryProduct); // false


// const isEveryUserActive = (users) => {
//   return users.every((user) => user.isActive === true);
// };




// Зверни увагу на відмінність між методом every та методом some: Метод every() перевіряє, чи задовольняють усі елементи умову колбек-функції. Метод some() перевіряє, чи задовольняє хоча б один елемент умову колбек-функції.






//*****************  Метод every() ******************
// Метод some(callback) перевіряє, чи задовольняє хоча б один елемент умову колбек-функції.

// Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що менший від нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Чи є хоча б один елемент, що менший від нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true


// const isAnyUserActive = (users) => {
//   return users.some((user) => user.isActive !== false);
// };




//*****************  Метод reduce() ******************



// array . reduce ( ( previousValue, element, index, array ) => {
//    // Тело колбек-функции
// }, initialValue);

// 1-й параметр ( previousValue) – это аккумулятор, то есть промежуточный результат. Значение, которое вернет колбек-функция на текущей итерации, будет являться значением этого параметра на следующей итерации;

// 2-й параметр – текущий элемент массива;

// 3-й параметр – индекс текущей итерации;

// 4-й параметр – ссылка на исходный массив.


// const total = [2, 7, 3].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 12
// Початкове значення акумулятора 0
// перша ітерація колбек-функції 0 + 2 поверне 2
// друга ітерація колбек-функції 2 + 7 поверне 9
// третя ітерація колбек-функції 9 + 3 поверне 12

// Метод  reduce(callback, initialValue) используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата.
// Не изменяет оригинальный массив
// Поэлементно берет оригинальный массив
// Возвращает все, что угодно (объект, массив, строка, число и т.п.)
// Может заменить функционал любого другого перебирающего метода массива и даже их комбинацию.

// Метод reduce()ожидает 2 параметра:

// 1-й параметр (обязательный) - колбек-функция , которая "прорабатывает" каждый элемент массива;

// 2-й параметр (необязательный) –  initialValueначальное значение аккумулятора.


// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((prevValue, player) => prevValue + player);

// const averagePlayTime = totalPlayTime / playtimes.length;


//*****************  Метод reduce() і масив об'єктів ******************

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;




//*****************  Метод toSorted() ******************
// array.toSorted() ;

// Сортирует исходный массив
// Возвращает новый массив
// По умолчанию сортирует по росту

// const scores = [27, 2, 41, 4, 7, 3, 75];

// console.log(scores.toSorted()); // [2, 27, 3, 4, 41, 7, 75]
// Оскільки за замовчуванням перед сортуванням метод toSorted() приводить усі елементи масиву до рядків, то фактично елементи сортуються як рядки, тобто на основі їхніх значень у таблиці Unicode.


// Масив рядків сортується за алфавітом.

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// console.log(students.toSorted()); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]



// Водночас порядковий номер великих літер менший, ніж у малих.

// const letters = ["b", "B", "a", "A", "c", "C"];

// console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]


// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Edgar Allan Poe",
// ];

// const ascendingReleaseDates = releaseDates.toSorted();

// const alphabeticalAuthors = authors.toSorted();


//*****************  Сортировка по возрастанию ******************
// Если вызов  compareFunction(a, b) возвращает любое отрицательное значение , то есть  a меньше  b, сортировка поставит  a перед  b.


// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = scores.toSorted((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]



//*****************  Сортировка по убыванию ******************
// Если вызов  compareFunction(a, b) возвращает любое положительное значение, то есть  bбольше  a, сортировка поставит  b перед  a.


// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = scores.toSorted((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]



// ****СВОЙ ПОРЯДОК СОРТИРОВКИ ДЛЯ ЧИСЕЛ. ОБЬЕКТОВ И СТРОК ***********


// массив чисел → a - b
// массив объектов → a.property - b.property
// строки → localeCompare()


// "a".localeCompare("b"); // -1 возрастающей
// "b".localeCompare("a"); // 1  убывающей
// "a".localeCompare("a"); // 0
// "b".localeCompare("b"); // 0 равны

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]



// Повертає негативне значення, якщо firstString повинен бути перед secondString
// Повертає позитивне значення, якщо firstString повинен бути після secondString
// Якщо рядки однакові, повертається нуль і їх послідовність по відношенню один до одного не змінюється


// [
//   { title: "B", year: 1995 },
//   { title: "C", year: 2005 },
//   { title: "A", year: 2010 }
// ]

// const sortedDesc = books.toSorted((a, b) => b.year - a.year);

// const sortedByTitle = books.toSorted((a, b) =>
//   a.title.localeCompare(b.title)
// );

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Edgar Allan Poe",
//   "Howard Lovecraft",
// ];

// const authorsInAlphabetOrder = authors.toSorted((a, b) =>
//   a.localeCompare(b));

// const authorsInReversedOrder = authors.toSorted((a, b) =>
//   b.localeCompare(a));


//*****************  Сортировка ОБЬЕКТОВ***************

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];


// const inAscendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );


// const inDescendingScoreOrder = students.toSorted(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );


// const inAlphabeticalOrder = students.toSorted((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = books.toSorted((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);



//*****************  Цепочки методов **************

// const names = students
//   .toSorted((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

// На масиві викликаємо метод toSorted()
// До результату роботи методу toSorted() застосовуємо метод map()
// Змінній names присвоюється результат роботи методу map()



// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

// На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів
// До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів
// На результаті методу filter() викликаємо toSorted()
// Змінній uniqueSortedCourses присвоюється результат роботи методу toSorted()


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((a, b) => a.localeCompare(b));