const cars = ['Audi', 'BMW', 'Volvo'];

console.log(cars);
// Spread operator on arrays
const copiedCars = [...cars, 'Range Rover', 'Fortuner'];
console.log('Spread array', copiedCars);

const person = {
  name: 'Amandeep',
  age: 33,
};

console.log(person);
// Spread operator on objects
const copiedPerson = { ...person, disabled: false };
console.log('Spread object', copiedPerson);

// Rest operator
const toArray = (...args) => {
  return args;
};

console.log('Rest operator', toArray(1, 2, 3, 4, 5, 6));
