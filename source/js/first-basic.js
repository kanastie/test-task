// 1. Проверка на палиндром

function isPalindrome(string) {
  const normalizedString = string
    .toLowerCase()
    .replaceAll(" ", "")
    .replace(/[.,:;?!-_]/g, "");
  let newString = "";

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    newString += normalizedString[i];
  }

  return newString === normalizedString;
}

console.log(isPalindrome("А роза упала на лапу Азора"));
console.log(isPalindrome("Привет"));

// 2. FizzBuzz

function fizzBuzz() {
  const endNumber = 15;
  let result;

  for (let i = 0; i <= endNumber; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result = "FizzBuzz";
    } else if (i % 3 == 0) {
      result = "Fizz";
    } else if (i % 5 == 0) {
      result = "Buzz";
    } else {
      result = i;
    }
  }
}

fizzBuzz();

// 3. Разбиение массива на части
// Функция, которая разбивает массив на группы заданного размера.

function chunkArray(array, size) {
  let newArray = [];

  for (let i = 0; i <= array.length; i += size) {
    let chunk = array.slice(i, i + size);
    newArray.push(chunk);
  }
  return newArray;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3));
