const name = 'Aman';
let age = 33;
const hasHobbies = true;
age = 35;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies ' +
    userHasHobby
  );
};

console.log(summarizeUser(name, age, hasHobbies));

const addOne = (a) => a + 1;

console.log(addOne(27));

const sum = (a, b) => a + b;

console.log(sum(4, 6));

const addRandom = () => 27 + 28;

console.log(addRandom());
