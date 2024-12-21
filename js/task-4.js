// todo Напишіть функцію calcTotalPrice(stones, stonesName), яка приймає масив об'єктів та рядок із назвою каменя.
// Функція рахує і повертає загальну вартість каменів з таким іменем, ціною та кількістю з об'єкта

const stonesArray = [
  { name: 'Ізумруд', price: 1300, quantity: 4 },
  { name: 'Брилліант', price: 2700, quantity: 6 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 150, quantity: 100 },
];

function calcTotalPrice(stones, stonesName) {
  for (const element of stones) {
    if (element.name === stonesName) {
      return element.price * element.quantity;
    }
  }
}
console.log(calcTotalPrice(stonesArray, 'Сапфір'));
