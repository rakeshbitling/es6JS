let Execute = (no) => {
    return new Promise((resolve, reject) => {
        if (no == 2) {
            resolve("right ans")
        }
        reject("wrong ans");
    });
}

async function trial () {
    try {
        let res = await Execute(2);
        console.log(res)
    } catch (e) {
        console.log(e)
    }
}

trial();
