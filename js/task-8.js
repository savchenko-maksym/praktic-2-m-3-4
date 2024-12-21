// Напишіть функцію, яка розверає масив у зворотньому напрямку.Метод reverse() не використовувати

const arrNumber = [11, 9, 2, 1];

function backarr(arr) {
  const newArr = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(backarr(arrNumber));

console.log(arrNumber.toReversed());
