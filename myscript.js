async function zadanie9() {
    let promise = new Promise((resolve, reject) => {
        const string = "Udało się!";
        setTimeout(() => resolve(string), 5000)
    });
    let result = await promise;

    console.log(result);
}

console.log(zadanie9());


async function multiplyAsync() {
    let promise = new Promise((resolve, reject) => {
        var x = 2;
        var y = 2;
        var z = x * y;

        if (isNaN(x || y)) {
            console.log("NaN");
        } else {
            setTimeout(() => resolve(z), 0000)
        }
    });
    let result = await promise;

    console.log(result);
}

console.log(multiplyAsync());