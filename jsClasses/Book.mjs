export class Book {
    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    }

    printInfo() {
        console.log(`The book is called "${this._name}" and was written by ${this._author} in ${this._year}`);
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (name === '') {
            throw new Error("[update failed] Book name cannot be empty.");
        }
        this._name = name;
    }

    get author() {
        return this._author;
    }

    set author(author) {
        if (author.length < 2) {
            throw new Error("[update failed] Author name should contain 2 or more symbols.");
        }
        this._author = author;
    }

    get year() {
        return this._year;
    }

    set year(year) {
        if (year > new Date().getFullYear()) {
            throw new Error("[update failed] The book has not been published yet.");
        }
        this._year = year;
    }

    static oldestBook(...arr) {
        const mapArr = arr.map(arr => arr.year);
        const min = Math.min(...mapArr);
        const oldestBook = arr.find(obj => obj.year === min);
        return oldestBook;
      }
}