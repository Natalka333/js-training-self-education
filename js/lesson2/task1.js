
// function getPrice(subscription) {
//     let price = 0;
//     if (subscription === 'pro') {
//         price = 100;
//     }
//     return price;
// }
// console.log(getPrice('free'));
// console.log(getPrice('pro'));



// function checkAge(age) {
//   if(age >= 18) {
//     return "You are an adult";
//   } else {
//       return 'You are not an adult';
//   }
//     return;
// }

// console.log(checkAge(30));
// console.log(checkAge(17));





// const grade = 85;

// if (grade >= 90) {
//   console.log("Perfectly");
// } else if (grade >= 80) {
//   console.log("Good");
// } else if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }




// function getBiggerNumber(a, b) {
//   return a > b ? a : b;
// }

// console.log(getBiggerNumber(5, 10)); // 10
// console.log(getBiggerNumber(20, 15)); // 20
// console.log(getBiggerNumber(7, 7)); // 7

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   return password === correctPassword ? "Access granted" : "Access denied, wrong password!";

// }




// const fruit = 'apple';

// switch (fruit) {
//   case 'apple':
//     console.log('Apple selected');
//     break;
//   case 'banana':
//     console.log('Banana selected');
//     break;
//   case 'orange':
//     console.log('Orange selected');
//     break;
//   default:
//     console.log('The fruit is unknown');
// }




// const day = 3;

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log('This is a working day');
//     break;
//   case 6:
//   case 7:
//     console.log('It is a day off');
//     break;
//   default:
//     console.log('Invalid');
// }



// function getSubscriptionPrice(type) {
//   switch(type) {
//     case "starter":
//       return 0;
//     case "professional":
//       return 20;
//     case "organization":
//       return 50;
//     default:
//       return "Invalid subscription type!";
//   }
// }

// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("starter"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("premium"));



// function getScreenType(screenWidth) {
//   const sm = 320;
//   const md = 768;
//   const lg = 1200;

//   if (screenWidth <= sm) {
//     return "Mobile screen";
//   } else if (screenWidth > sm && screenWidth <= md) {
//     return "Tablet screen";
//   } else if (screenWidth > md && screenWidth <= lg) {
//     return "Desktop screen";
//   } else {
//     return "Godzilla screen";
//   }
// }

// console.log(getScreenType(700));  // "Tablet screen"
// console.log(getScreenType(1200)); // "Desktop screen"
// console.log(getScreenType(1500)); // "Godzilla screen"
// console.log(getScreenType(320));  // "Mobile screen"




// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;
// if(screenWidth <= sm || screenWidth > md) {
// 	console.log("Mobile or Desktop screen");
// }




// function canUserChat(isOnline, isBlocked) {
//   const canChat = isOnline && !isBlocked;

//   if (canChat) {
//     return "Can type in chat!";
//   } else {
//     return "Blocked from typing in chat!";
//   }
// }

// console.log(canUserChat(true, false));  // "Can type in chat!"
// console.log(canUserChat(true, true));   // "Blocked from typing in chat!"
// console.log(canUserChat(false, false)); // "Blocked from typing in chat!"
// console.log(canUserChat(false, true));  // "Blocked from typing in chat!"





//  const message = "JavaScript is awesome" ;
// console. log (message. toUpperCase()); // "JAVASCRIPT IS AWESOME"

// const fullName = "Jacob Mercer" ;
//  console . log (fullName. slice ( 0,4 ) ) ; // 'Jaco'
// console . log (fullName. slice ( 3 , 9 )); // 'ob Mer'
// console . log (fullName. slice ( 5 , fullName. length )); // 'Jacob Mercer'




// function checkLength(text, maxLength) {
//     return text.length <= maxLength;
        
// }

// console.log(checkLength("Hello", 10));
// console.log(checkLength("Hello world", 5));




// function checkPassword(password) {
//     return password === "qwerty" ? "Access granted" : "Access denied";
// }

// console.log(checkPassword("qwerty"));
// console.log(checkPassword("12345"));



// function createFileName(name, ext) {
//   const newName = name.toLowerCase().trim();
//   const newExt = ext.toLowerCase().trim();
//   return `${newName}.${newExt}`;
// }

// console.log(createFileName(" order ", "txt"));




// function formatMessage(message, maxLength) {
//     if (message.length <= maxLength) {
//         return message;
//     } return message.slice(0, maxLength) + '...';
// }
// console.log(formatMessage("Hello world", 20));
// console.log(formatMessage("Hello world", 5))



// function checkForSpam(message) {
//   const normalized = message.toLowerCase();

//   const hasSpam = normalized.includes("spam");
//   const hasSale = normalized.includes("sale");

//   return hasSpam || hasSale;
// }

// console.log(checkForSpam("Amazing SPAM deal"));
// console.log(checkForSpam("Get best sale offers"));
// console.log(checkForSpam("Hello world"));


// let count = 0 ;

// while ( count < 5 ) {
//    console . log ( `Count: ${ count } ` );
//    count += 1 ;
// }

// function  countClients ( clientCounter, maxClients ) {
//   let counter=clientCounter;

//   while (counter < maxClients) {
//      console . log (counter);
//     counter += 1 ;
//   }
// }

// countClients( 18 , 25 );


// let count = 0 ;

// do {
// 	 console . log ( `Count: ${ count } ` );
// 	 count += 1 ;
// } while ( count < 5 );


// function  sumUpTo ( number ) {
//   let sum = 0 ;

//   for (let i = 0 ; i <= number ; i += 1 ) {
//      sum += i;
//   }

//   return  sum ;
// }

// console.log(sumUpTo(5)); // 15
// console.log(sumUpTo(10)); // 55
// console.log(sumUpTo(0)); //0


// let x = 5 ;
// const y = x++;
// console .log ( x ); // 6
// console .log ( y ); // 5

// for (let i =  0 ; i <= 5; i++) {
//   console.log(i) ;
// }


// function calculateEvenTotal(number) {
// let sum = 0;
//   for(let i = 0; i<= number; i++) {
//  if(i %2 === 0) {
//    sum += i;
//  }  
//   }
//   return sum;
// }

