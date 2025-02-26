//Additional homework:
// Rewrite code so that when we feed one hamster, second one does not get his food pushed.

const hamster = {
    feed(food) {
        this.food.push(food);
    }
}

const jerry = {
    food: [],
    name: 'Jerry',
    __proto__: hamster
}

const tom = {
    food: [],
    name: 'Tom',
    __proto__: hamster
}

jerry.feed('corn');
console.log(jerry.food); // ['corn'] - OK
console.log(tom.food);// ['corn'] - wrong, must be empty

// ПРОТОТИП ПРИБИРАТИ НЕ МОЖНА, інші речі змінювати можна