// const value = "56.8cm32";
// const number = Number.parseFloat(value);

// function numberOne(number) {
//  let newNumber = number * 2;
//     console.log(newNumber);
// }
   
// numberOne(number);

// // Оголошення параметрів x, y, z
// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }

// // Передача аргументів
// multiply(2, 3, 5); // "Result: 30"
// multiply(4, 8, 12); // "Result: 384"
// multiply(17, 6, 25); // "Result: 2550"

// function multiply(x, y, z) {
//   console.log(`Result: ${x * y * z}`);
// }

// console.log("Log before multiply execution");
// multiply(2, 3, 5); // "Result: 30"

// const x = + '5';
// console.log(x);


// .replace(',', '.') ---метод которій заменяет символ или слово
//  с ненужного на то что нам нужно.
// В данном случае идет замена запятой на точку,
// потому что нельзя использовать  ,  вчислах!

// +result.toFixed(1); в данном случае + перед +result--означает,что мы приводим строку к числу. Вместо записи return Number(result.toFixed(1));

// function calcbMI(weight, height) {
//     weight = +weight.replace(',', '.');
//     height = +height.replace(',', '.');
//     const result = weight / height ** 2;
//     return +result.toFixed(1);
    
// }

// const bmi = calcbMI('115,3', '1.79');
// console.log(bmi);

function makeTransaction(quantity, pricePerDroid) {

    const totalPrice = quantity * pricePerDroid;

return `You ordered ${quantity} droids worth ${totalPrice} credits!`
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
