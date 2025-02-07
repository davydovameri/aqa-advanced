const number = 4;

console.log('Генерація через цикл for:');

for (let i = 0; i < 10; i++){
    console.log(`${number} x ${i+1} = ${number*(i+1)}`);
}

console.log('Генерація через цикл while:');

let j = 0;
while (j < 10){
    console.log(`${number} x ${j+1} = ${number*(j+1)}`);
    j++;
}