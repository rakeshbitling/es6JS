const p1 = new Promise((resolve,reject) => {
    resolve("p1 resolved")
});

const p2 = new Promise((resolve,reject) => {
    resolve("p2 resolved")
});

const p3 = new Promise((resolve,reject) => {
    resolve("p3 resolved")
});

Promise.race([p1,p2,p3])
.then(message => console.log(message))
.catch(err => console.log('--',err))