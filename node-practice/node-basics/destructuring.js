const person = {
  name: 'Amandeep',
  age: 33,
  greet() {
    console.log('Hi I am ' + this.name);
  },
};

// Object desctructuring
const { name, age } = person;

console.log(name, age);

const cars = ['Audi', 'BMW', 'Volvo'];

// Array destructuring
const [car1, , car2] = cars;
console.log(car1, car2);
