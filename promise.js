function executionValue (number) {
    return new Promise ((resolve,reject)=>{
        if (number == 2) {
             resolve("true");
        } else { 
             reject("failed");
        }
    });
}

executionValue (2).then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
});