const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback('This is my error!', undefined);
    callback(undefined, [1, 4, 7]);
  }, 2000);
}

// doWorkCallback((error, result) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log(result);
// });

// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('This is my error!');
//         // resolve([1, 4, 7]);
//     }
//     , 3000);
// });

// doWorkPromise.then((result) => {
//     console.log('Success!', result);
// }).catch((error) => {
//     console.log('Error!', error);
// }
// );  

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject('Numbers must be non-negative');
      }
      resolve(a + b);
    }, 2000);
  });
} 

// add(1, 2).then((sum) => {
//   console.log('Sum:', sum);
//   add(sum, 5).then((sum2) => {
//     console.log('Sum2:', sum2);
//     add(sum2, 10).then((sum3) => {
//       console.log('Sum3:', sum3);
//     }).catch((error) => {
//       console.log('Error:', error);
//     }
//     );
//   }).catch((error) => {
//     console.log('Error:', error);
//   }
//   );
// }).catch((error) => {
//   console.log('Error:', error);
// }
// );

// add(1, 2).then((sum) => {
//   console.log('Sum:', sum);
//   return add(sum, 5);
// }
// ).then((sum2) => {
//   console.log('Sum2:', sum2);
//   return add(sum2, 10);
// }).then((sum3) => {
//   console.log('Sum3:', sum3);
// }).catch((error) => {
//   console.log('Error:', error);
// }
// );

// add(1, -2).then((sum) => {
//   console.log('Sum:', sum);
// }).catch((error) => {
//   console.log('Error:', error);
// }
// );



const doWorkPromise = async () => {
  const sum = await add(1, 2);
  console.log('Sum:', sum);
  const sum2 = await add(sum, 5);
  console.log('Sum2:', sum2);
  const sum3 = await add(sum2, -3);l
  console.log('Sum3:', sum3);
  return sum3;
}

doWorkPromise().then((result) => {
  console.log('Result:', result);
}).catch((error) => {
  console.log('Error:', error);
}
);