let promise1 = new Promise((resolve, reject) => {
    // reject('promise 1 failure!');
    setTimeout(() => {
        resolve('Promise 1 success!');
    }, 1000);
})

let promise2 = new Promise((resolve, reject) => {
    // reject('Promise 2 failure!');
    setTimeout(() => {
        resolve('Promise 2 success!');
    }, 1000);
})

let promise3 = new Promise((resolve, reject) => {
    // reject('Promise 3 failure!');
    setTimeout(() => {
        resolve('Promise 3 success!');
    }, 1000);
})

// promise1.then((resolved) => {
//     console.log(resolved);
// }).catch((rejected) => {
//     console.log(rejected);
// }).finally(() => {
//     console.log("Finally at end.");
// })

Promise.all([promise1, promise2, promise3]).then((results) => {
    results.forEach(element => console.log(element));
}).catch((error) => {
    console.log(error)
});