async function zadanie9() {
    let promise = new Promise((resolve, reject) => {
        const string = "Udało się!";
        setTimeout(() => resolve(string), 5000)
    });
    let result = await promise;

    console.log(result);
}

console.log(zadanie9());

const string = "Rejected";

var multiplyAsync = (x, y) => {
    return new Promise((resolve, reject) => {
        if (typeof x !== 'number' || typeof y !== 'number') {
            reject(wynik);
        }
        else {
            resolve(x * y);
        }
    })
}
multiplyAsync(5, 5).then(console.log).catch((error) => {
    console.log(string);
})
multiplyAsync(5, "string").then(console.log).catch((error) => {
    console.log(string);
})