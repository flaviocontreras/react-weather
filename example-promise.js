// function getTempCallback(location, callback){
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback("Philadelphia", function(err, temp){
//   if(err){
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location){
//   return new Promise((resolve, reject) => {
//     setTimeout(() =>{
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia')
//   .then((temp) =>{
//     console.log('promise success', temp);
//   }, (err) => {
//     console.log('error', err);
//   }
// );


// Challenge Area
function addPromise (a, b){
  return new Promise((resolve, reject) =>{
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    } else {
      reject("A & b need to be numbers");
    }
  });
}


addPromise(5, 8).then((sum) => {
  console.log("success", sum);
}, (err) => {
  console.log("error", err);
});

addPromise(5, 'err').then((sum) => {
  console.log("success", sum);
}, (err) => {
  console.log("error", err);
});
