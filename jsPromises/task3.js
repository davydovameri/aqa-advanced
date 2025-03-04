async function toDos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.error('An error occurred:', error);
        throw error;
    };
};

async function user() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        console.log(data);
        return data;
    }
    catch (error) {
        console.error('An error occurred:', error);
        throw error;
    };
};

const toDoPromise1 = toDos();
const toDoPromise2 = toDos();
const userPromise1 = user();
const userPromise2 = user();

async function promiseAll() {
    try {
        const promiseAllResult = await Promise.all([toDoPromise1, userPromise1])
        console.log('The result is:', promiseAllResult);
    }
    catch (error) {
        console.error('An error occurred:', error);
        throw error;
    };
};

async function promiseRace() {
    try {
        const promiseRaceResult = await Promise.race([toDoPromise2, userPromise2])
        console.log('The result is:', promiseRaceResult);
    }
    catch (error) {
        console.error('An error occurred:', error);
        throw error;
    };
};

promiseAll();
promiseRace();