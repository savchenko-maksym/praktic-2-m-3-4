// Напишіть функцію, яка повертає новий масив без вказаних значень.Використовуйте примітиви
// Очікується [1, 2, 3, 1, 2] без [1, 2] => [3]
function name(array1, array2) {
  const newArray = [];
  for (const element of array1) {
    if (!array2.includes(element)) {
      newArray.push(element);
    }
  }
  return newArray;
}
console.log(name([1, 2, 3, 1, 2], [1, 2]));
