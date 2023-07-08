const hobbies = ['Cricket', 'Football', 'Video Games', 'Chess'];

for (let hobby of hobbies) {
  console.log(hobby);
}

const mixedArray = [1, 'Amandeep', 33, { hobbies }, { class: '12th' }];
console.log(mixedArray);

const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((item) => item * 2);
console.log(doubleNumbers);
