const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let notNumCount = 0; // на випадок, якщо будуть не тільки числа в масиві

for (let i = 0; i <= numbers.length - 1; i++) {
    if (typeof numbers[i] === 'number') {
        if (numbers[i] > 0)
            positiveCount++;
        else if (numbers[i] < 0)
            negativeCount++;
        else
            zeroCount++;
    }
    else
        notNumCount++;
}

console.log('Кількість позитивних чисел: ', positiveCount);
console.log('Кількість негативних чисел: ', negativeCount);
console.log('Кількість нульових чисел: ', zeroCount);
console.log('Кількість не числових значень: ', notNumCount);