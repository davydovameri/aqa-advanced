const car1 = {
    brand: "Volvo",
    model: "XC90",
    year: 2025
};

const car2 = {
    brand: "Porsche",
    model: "911",
    owner: "Samantha Jones"
};

const car3 = { ...car1, ...car2 };

console.log(car3);