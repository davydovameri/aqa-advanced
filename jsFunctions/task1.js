function checkValues(width, height){
    if(typeof width !== 'number' || typeof height !== 'number')
        throw new Error('Used argument is of invalid type!');
    
    if(width <= 0 || height <= 0)
        throw new Error('Used argument is not a positive value!');
}

function squareFuncDec(width, height){
    checkValues(width, height);
    return width * height;
}

console.log("Result for function declaration:", squareFuncDec(5,10));

const squareFuncExp = function (width, height){
    checkValues(width, height);
    return width * height;
}

console.log("Result for function expression:", squareFuncExp(6,11));

const squareArrFunc = (width, height) => {
    checkValues(width, height);
    return width * height;
}

console.log("Result for arrow function:", squareArrFunc(7,12));