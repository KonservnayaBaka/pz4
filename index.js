// Создайте переменную name и присвойте ей значение вашего имени. Напишите код, который выводит в консоль фразу "Привет, [имя]!".
const name = 'Лев';
console.log(`Привет, ${name}!`);

// Создайте функцию isEven, которая принимает число и возвращает true, если число чётное, и false, если число нечётное.
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); 
console.log(isEven(3)); 

// Создайте объект person со свойствами name, age и city. Напишите код, который выводит в консоль фразу "Меня зовут [имя]. Мне [возраст] лет. Я живу в городе [город]."
const person = {
  name: 'Лев',
  age: 18,
  city: 'Великий Новгород'
};
console.log(`Меня зовут ${person.name}. Мне ${person.age} лет. Я живу в городе ${person.city}.`);

// Создайте массив чисел и напишите код, который считает и выводит в консоль сумму всех чисел в массиве.
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

const car = {
    make: 'Hyundai',
    model: 'Creta',
    year: 2022
  };
  
  console.log(`Я езжу на ${car.make} ${car.model}, выпущенную в ${car.year}`);