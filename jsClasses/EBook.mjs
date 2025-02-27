import { Book } from './Book.mjs'

export class EBook extends Book {
    constructor(name, author, year, fileFormat) {
        super(name, author, year);
        this._fileFormat = fileFormat;
    }
    
    printInfo() {
        const originalLog = console.log;
        let output = [];

        console.log = (...messages) => {
            output.push(messages.join(" ")); 
        };

        super.printInfo(); 
        console.log = originalLog; 

        console.log(output.join(" ") + ` in ${this.fileFormat} format.`);
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
        return new EBook(name, author, year, format);
      }
}