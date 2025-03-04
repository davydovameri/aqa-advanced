function toDos() {
    return new Promise(function (resolve) {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                resolve(json);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
}
const toDoPromise1 = toDos();
const toDoPromise2 = toDos();

function user() {
    return new Promise(function (resolve) {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                resolve(json);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
}
const userPromise1 = user();
const userPromise2 = user();

const promiseAll = Promise.all([toDoPromise1, userPromise1])
    .then(res => { console.log(res) })
    .catch(err => { console.log(err) });

const promiseRace = Promise.race([toDoPromise2, userPromise2])
    .then(res => console.log('Fulfilled: ', res))
    .catch(err => console.log('Rejected: ', err));