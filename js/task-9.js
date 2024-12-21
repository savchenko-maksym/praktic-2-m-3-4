// Напишіть функцію, яка очистить масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null

// Результат, що очікується[0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

function clear(arr) {
  const newArr = [];
  for (const element of arr) {
    if (element) {
      newArr.push(element);
    }
  }
  return newArr;
}

console.log(clear([0, 1, false, 2, undefined, "", 3, null]));

console.log([0, 1, false, 2, undefined, "", 3, null, 7].filter((x) => x > 5));
