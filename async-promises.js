const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);
  });
  return promise;
};
// asynchronous code - it will wait for the promise to resolve
setTimeout(() => {
  fetchData()
    .then((text) => {
      console.log('Response 1', text);
      return fetchData();
    })
    .then((text2) => {
      console.log('Response 2', text2);
    });
  console.log('Hello timer is completed!');
}, 2000);

// synchronous code - it will not wait for the promise to resolve
console.log('Hi there');
console.log('I am Amandeep Singh');
