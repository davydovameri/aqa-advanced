const users = [
    {
        name: "Ann",
        email: "ann@gmail.com",
        age: 15
    },
    {
        name: "Kate",
        email: "kate@gmail.com",
    },
    {
        email: "jane@gmail.com",
        age: 18
    },
    {
        name: "Daria",
        age: 34
    }
];

for (const { name, age, email } of users) {
    console.log(`${name} is ${age} years old and her email is ${email}`);
}