function checkOrder(available, ordered){
    if(typeof available !== 'number' || typeof ordered !== 'number')
        throw new Error('Used argument is of invalid type!');

    if (available < ordered)
        return console.log("Your order is too large, we don’t have enough goods.");
    if (ordered === 0)
        return console.log("Your order is empty.");
    if (available >= ordered)
        return console.log("Your order is accepted.");
}

checkOrder(300,0);
checkOrder(300,500);
checkOrder(300,100);