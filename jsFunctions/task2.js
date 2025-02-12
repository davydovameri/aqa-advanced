function isAdult (age){
    if(typeof age !== 'number')
        throw new Error('Used argument is of invalid type!');
    
    return age >= 18;
}

console.log(`Is the person an adult?`, isAdult(25));
console.log(`Is the person an adult?`, isAdult(15));