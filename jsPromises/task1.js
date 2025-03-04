function myFunc(text, time) {
    setTimeout(() => {
        console.log(text);
    }, time);
}

myFunc("This text was delayed!", 5000);