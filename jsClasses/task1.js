import { Book } from './Book.mjs'
import { EBook } from './EBook.mjs'

const book1 = new Book("Pokemons", "J.J.Pikachu", 2025);
book1.printInfo();
console.log(`Current author of the book - ${book1.author}`);

try {
    book1.author = "A";
} catch (error) {
    console.log(error.message, '\n');
}

const book2 = new Book("Stitch", "Lilo", 2001);
book2.printInfo();
console.log(`Current name of the book - ${book2.name}`);

try {
    book2.name = "";
} catch (error) {
    console.log(error.message, '\n');
}

const book3 = new EBook("Romeo and Juliet", "William Shakespeare", 1597, "PDF");
book3.printInfo();
console.log(`Current file format of the book - ${book3.fileFormat}`);

try {
    book3.fileFormat = "JPG";
} catch (error) {
    console.log(error.message, '\n');
}

const book4 = new EBook("Eneida", "Ivan Kotliarevsky", 1842, "PDF");
book4.printInfo();
console.log(`Current year of the book - ${book4.year}`);

try {
    book4.year = 2026;
} catch (error) {
    console.log(error.message, '\n');
}

console.log("The oldest book is:\n", Book.oldestBook(book1, book2, book3, book4));
console.log("Converted book:\n", EBook.eConverter(book1, "PDF"));