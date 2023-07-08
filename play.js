const name = 'Aman';
let age = 33;
const hasHobbies = true;
age = 35;

function summarizeUser(userName, userAge, userHasHobby) {
  return (
    'Name is ' +
    userName +
    ', age is ' +
    userAge +
    ' and the user has hobbies ' +
    userHasHobby
  );
}

console.log(summarizeUser(name, age, hasHobbies));
