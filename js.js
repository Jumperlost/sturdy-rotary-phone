// Реалізувати рекурсивну функцію, яка зводить число в ступінь.

// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функціюpow (num, degree).

function pow(base, exponent) {
  return Math.pow(base, exponent);
}
let a = +prompt("перше число фунеції");
let b = +prompt("друге число фунції");
let result = pow(a, b);
alert(result);

// Завдання 2. Реалізуйте функцію removeElement

// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
function removeElement(arr, index) {
  arr.splice(index, 1);
}

let arr = [3, 4, 6, 11, 64, 223, 877, 11, 44, 77];
let removeItem = 2;
removeElement(arr, removeItem);
console.log(arr);

// Реалізуйте функцію generateKey

// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

let generateKey = (length, chars) => {
  let result = "";
  for (let i = length; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  console.log(result);
};

generateKey(16, "0123456789abcdefghijklmnopasdfghjklzxcvbnm");
