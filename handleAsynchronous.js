let a = 10;
let b = 0;

// update the b value but a+b produce 10
// setTimeout(() => {
//     b = 20
// }, 1000);

// console.log(a+b);

let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 1000);
});

waitingData.then((data) => {
  b = data;
  console.log(a + b);
});
