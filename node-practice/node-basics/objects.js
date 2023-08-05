const person = {
  name: 'Aman',
  age: 33,
  greet() {
    console.log('Hi I am ' + this.name);
  },
};
console.log(person);
person.name = 'Deep';
person.greet();
