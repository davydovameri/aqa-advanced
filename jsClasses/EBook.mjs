import { Book } from './Book.mjs'

export class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year);
        this.fileFormat = fileFormat;
    }

    printInfo() {
        console.log(`The book is called "${this.name}" and was written by ${this.author} in ${this.year} in ${this.fileFormat} format.`);
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(fileFormat) {
        if (fileFormat !== 'PDF' && fileFormat !== 'CSV' ) {
            throw new Error("[update failed] File format should be PDF or CSV");
        }
        this._fileFormat = fileFormat;
    }

    static eConverter({ name, author, year}, format) {
        const convertedBook = new EBook(name, author, year, format);
        return convertedBook;
      }
}