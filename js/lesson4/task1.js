// *********ОБЬЕКТЫ***********

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// console.log(user);


// *********objectName.key    доступ к свойству объекта***********

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["historical prose", "adventure"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined



// *********Доступ к вложенным свойствам***********

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swimming", "music", "sci-fi"],
// };

// const location = user.location;
// console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

// const country = user.location.country;
// console.log(country); // "Jamaica"


// *********Доступ к вложенным свойствам ***це масив***********



// const hobbies = user.hobbies;
// console.log(hobbies); // ["swimming", "music", "sci-fi"]

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swimming"

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3


// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];


// *********Доступ к свойствам через квадратные скобки***********


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// console.log(book.title); // "The Last Kingdom"
// console.log(book["title"]); // "The Last Kingdom"

// const propKey = "author";
// console.log(book.propKey); // undefined
// console.log(book[propKey]); // "Bernard Cornwell"

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];


// *********Изменение значения свойств***********

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");


// *********Добавление свойств***********

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// }


// *********Краткие свойства**********

// const name = "Henry Sibola" ;
//  const age = 25 ;

// const user = {
//     name: name,
//     тоже самое что-
//   name,
//   age,
// };

// console. log ( user.name ); // "Henry Sibola"
// console. log ( user.age ); // 25

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };




// *********Вычислительные свойства**********

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };



// *********Перебор объекта****объект — это не итерабельная сущность*********

// *********Цикл for...in    Для перебирания объектов используется специальный цикл*********

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]);  // Значення властивості з таким ключем
// }


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];
// for(const key in apartment ) {
//   keys.push(key); ******КЛЮЧ
//   values.push(apartment[key]); ******ЗНАЧЕНИЕ КЛЮЧА
// }


// *********Метод Object.keys()*********
// *******Object.keys(object), *******
// який приймає об'єкт і повертає масив ключів його властивостей



// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']


// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }



// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for(const key of keys) {
//    values.push(apartment[key]);
// }
// console.log(values);


// function countProps(object) {
//   const keys = Object.keys(object);
//   return keys.length;
// }


// *********Метод Object.values()*********
//***** Object.values(object) возвращает массив значений его параметров***


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ["title", "author", "rating"]

// const values = Object.values(book);
// console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };


// const keys = Object.keys(apartment);
// const values = Object.values(apartment);


// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   const values = Object.values(salaries);
//   for(const value of values){
//     totalSalary += value;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


// ****************Массив объектов**********************
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
//   }
// ];

// ИСПОЛЬЗУЕМ  ЦИКЛ for...of  ДЛЯ ПЕРЕБОРА

// for (const book of books) {
//   console.log(book); // Об'єкт книги
//   console.log(book.title); // Назва
//   console.log(book.author); // Автор
//   console.log(book.rating); // Рейтинг
// }


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for(const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }



// ****************Поиск объекта по значению свойства**********************

// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell" },
//   { title: "Beside Still Waters", author: "Robert Sheckley" },
//   { title: "The Tell-Tale Heart", author: "Edgar Allan Poe" }
// ];

// const authorToSearchFor = "Robert Sheckley";

// for (const book of books) {
// 	if(book.author === authorToSearchFor) {
// 		console.log(book);
// 		console.log(book.title)
// 		console.log(book.rating)
// 	}
// }


// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for(product of products) {
//     if(product.name === productName) {
//       return product.price;
//     }
//   }
// }



// ****************Коллекция значений свойства**********************

// 1.Создать новый пустой массив для хранения значений свойств.
// 2.Перебор массива объектов в цикле.
// 3.На каждой итерации добавить в новый массив значение требуемого свойства.



// const books = [
//   { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//   { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//   { title: "The Tell-Tale Heart", author: "Edgar Allan Poe", rating: 6.8 }
// ];

// const titles = [];

// for (const book of books) {
// 	titles.push(book.title)
// }

// console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Tell-Tale Heart"]





// const books = [
//   { title:  "The Last Kingdom" , author:  "Bernard Cornwell" , rating:  8.2 },
//   { title:  "Beside Still Waters" , author:  "Robert Sheckley" , rating:  9 },
//   { title:  "The Tell-Tale Heart" , автор:  "Edgar Allan Poe" , rating:  6.8 }
// ];


// let totalRating =  0 ;

// for (const book of books) {
//   totalRating + = book.rating;
// }

// const averageRating = totalRating / books.length;
// console.log(averageRating); //  8




// ************************Запомнить легко!!!!!!!!!!!!!!!!!
// Точка .

// Когда свойство пишешь вручную:
// product.name

// Скобки []

// Когда имя свойства лежит в переменной:
// product[propName]



// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const totalValue = [];

//   for (const product of products) {
//     if (product[propName] !== undefined) {
//       totalValue.push(product[propName]);
//     }
//   }
//   return totalValue;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("price"));



// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }

//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Blaster"));


// ****************Методи об'єкта*********************
// Если значение свойства – это функция, такое свойство называется методом объекта .




// // ✅ Логічно й синтаксично згруповані сутності
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     return "Returning all books";
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
// 		return `Adding book ${bookName}`;
//   },
// };

// // Виклики методів
// console.log(bookShelf.getBooks());
//  // поверне "Returning all books"
// console.log(bookShelf.addBook("New book 1"));
//  // поверне "Adding book New book 1"
// console.log(bookShelf.addBook("New book 2"));
// // поверне "Adding book New book 2"


//  const atTheOldToad = {
//    potions: [],
//      getPotions() {
//      return "List of all available potions";
//      },
//      addPotion(potionName) {
//        return `Adding ${potionName}`;
//      }
//  }
// console.log(atTheOldToad.addPotion("Invisibility"));
//    console.log(atTheOldToad.getPotions());
   
   

// ****************Доступ к свойствам объекта*********************
// Для доступа к объекту в методе
// используется ключевое слово  this
// Значением  this будет ссылка на объект перед «точкой», то есть объект, вызвавший этот метод, в нашем случае – это ссылка на объект  bookShelf.

// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     console.log(this);
//   },
// };

// bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}

// const bookShelf = {
//     books: ["The Last Kingdom", "The Mist"],
//     ratin:8,
//   getBooks() {
//       return this.books;
//     //   return this.rating;
//   }
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };



// *******************Изменение по ссылке******************
// обращаясь к this--обращаемся к ссылке на обьект который вызвал этот метод bookShelf


// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   }
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]



//   const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   },
// };


// const bookShelf = {
//   books: [
// 		{ title: "The Last Kingdom", rating: 8 },
// 		{ title: "The Mist", rating: 6 }
// 	],
//   getBooks() {
//     return this.books;
//   },
//   addBook(newBook) {
//     this.books.push(newBook);
//   }
// };

// (bookShelf.addBook({ title: "Dream Guardian", rating: 9 }));
// console.log(bookShelf.books);



// ******************Масив об’єктів******************

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getAvarageRating() {
//     let totalRating = 0;

//     for (const book of this.books) {
//       totalRating += book.rating;
//     }

//     return totalRating / this.books.length;
//   },
// };

// bookShelf.getAvarageRating(); // 7



// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let totalPrice = 0;
//     for(const potion of this.potions) {
//       totalPrice += potion.price;
//     }
//     return totalPrice;
//   },
// };


// *****************Изменение объекта в массиве***************

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
// 	changeRating(bookName, newRating) {
// 		for(const book of this.books) {
// 			if(book.title === bookName) {
//                 book.rating = newRating;
//                 return book;
// 			}
//         }
//     }
    
// };
// console.log(bookShelf.changeRating("The Mist", 9));
// console.log(bookShelf.books);



// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for(const potion of this.potions) {
//       if(potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };



// *****************  Синтаксис spread і rest  **********************
// *****************  Остаточные параметры  *********************

//  используется синтаксис (args или  rest). который позволяет собрать группу независимых элементов в массив.

// function  multiply ( ...args ) {
//   console.log(args);
// }

// multiply( 1 , 2 ); // [1, 2]
// multiply( 1 , 2 , 3 ); // [1, 2, 3]
// multiply( 1 , 2 , 3 , 4 ); // [1, 2, 3, 4]

// Свободные параметры могут быть отмечены через три точки .... Буквально это означает: "собери оставшиеся параметры и положи их в массив". Имя параметра может быть произвольным. Чаще его называют args или rest.


// *****************  Сбор части аргументов **********************
// Операция  (...rest)также позволяет собрать в массив только ту часть аргументов, которая необходима.

// function multiply(first, second, ...args) {
//   console.log(first, second, args);
// }

// multiply(1, 2); // 1 2
// multiply(1, 2, 3); // 1 2 [3]
// multiply(1, 2, 3, 4); // 1 2 [3, 4]


// function addOverNum(value, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if(arg > value) {
//       total += arg;
//     }
//   }
//   return total;
// }



// *****************  Вхождение параметров **********************
// Иногда нужно сделать обратное — передать массив поэлементно в вызываемую функцию.

// Здесь целесообразно использовать оператор распыления ...spread

// const temps = [14, -4, 25, 8, 11];

// console.log(...temps); // 14 -4 25 8 11  набір окремих чисел

// // ✅ Передамо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25


// function getExtremeScores(scores) {
//   const rating = {
//     best = Math.max(...scores),
//     worst = Math.min(...scores);
//   };
//   return raning;
// }


// *****************  Создание массива**********************

// Операция ...spread позволяет создать копию массива или «склеить» произвольное количество массивов в один новый.
// const temps = [14, -4, 25, 8, 11];

// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]


//  в новом будут копии всех(элементов). Порядок распределения важен – он влияет на порядок элементов в новой коллекции.

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]



// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);


// *****************  Создание объекта *********************

// Операция  spread позволяет распылить свойства произвольного количества объектов в один новый.

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

//  Имена свойств объекта — уникальны, поэтому распыляемые свойства объекта могут перезаписать значение уже существующего свойства, если их имена совпадают.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }



// При распылении можно добавлять свойства в любое место.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }



// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);
// {theme: 'light', public: false, withPassword: true, minNumberOfQuestions: 10, timePerQuestion: 30}
