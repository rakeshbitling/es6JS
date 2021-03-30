const p1 = new Promise((resolve,reject) => {
    reject("p1 resolved")
});

const p2 = new Promise((resolve,reject) => {
    resolve("p2 resolved")
});

const p3 = new Promise((resolve,reject) => {
    resolve("p3 resolved")
});

Promise.all([p1,p2,p3])
.then(messages => console.log(messages))
.catch(err => console.dir('inside catch-',err))