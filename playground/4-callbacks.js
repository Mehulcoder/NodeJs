function add(a, b, callback) {
    setTimeout(() => {
        callback(a+b);
    }, 2000);
}

//In the next line basically the third function is in argument callback(which takes in argument as a+b)
// Basically we have passed in the function as an argument, which we are calling inside th setTimeout function.
add(1, 4, (sum) => {
    console.log(sum);
});

// console.log(add(3, 4));