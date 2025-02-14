function handleNum(number, callback1, callback2) {
    !(number % 2) ? callback1() : callback2();
}

function handleEven() {
    console.log('number is even');
}

function handleOdd() {
    console.log('number is odd');
}

handleNum(11, handleEven, handleOdd);