// todo У нас є об'єкт, у якому зберігаються заробітні плати команди.
// Напишіть код для отримання суми усіх зарплат і збережіть його результат у змінній sum
// Якщо об'єкт salaries порожній, то результат повинен бути 0

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

let sum = 0;
for (const element of Object.values(salaries)) {
  sum += element;
}
console.log(sum);
