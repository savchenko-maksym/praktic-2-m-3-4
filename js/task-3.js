// todo Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи і зберігає їх як властивості об'єкта
// sum() повертає суму збережених значень
// mult() помножує збережені значення і повертає результат

const calculator = {
  read(a, b) {
    this.value1 = a;
    this.value2 = b;
  },
  sum() {
    return this.value1 + this.value2;
  },
  mult() {
    return this.value1 * this.value2;
  },
};

calculator.read(5, 8);
console.log(calculator.sum());
console.log(calculator.mult());
