class FetchHandler {
    constructor(url, headers = {}) {
        this.url = url;
        this.headers = headers;
    }

    async fetchCall(apiSubPath, method = 'GET') {
        try {
            const response = await fetch(`${this.url}${apiSubPath}`, { method, headers: this.headers });
            return response.json();
        } catch (error) {
            console.error("Fetch error:", error);
        }
    }
}

class ToDoFetcher extends FetchHandler {
    constructor(url, headers) {
        super(url, headers);
    }

    async fetchToDo(todoId) {
        return this.fetchCall(`/todos/${todoId}`);
    }
}

class UserFetcher extends FetchHandler {
    constructor(url, headers) {
        super(url, headers);
    }

    async fetchUser(userId) {
        return this.fetchCall(`/users/${userId}`);
    }
}

const toDoFetcher = new ToDoFetcher('https://jsonplaceholder.typicode.com');
const userFetcher = new UserFetcher('https://jsonplaceholder.typicode.com');

const toDoPromise = toDoFetcher.fetchToDo(1);
const userPromise = userFetcher.fetchUser(1);

toDoPromise.then(console.log);
userPromise.then(console.log);