import Person from '/Person.js'
export class Documento {
    public title: String
    public subtitle: String
    public publishedat: Date
    public aythor: Person

    constructor (title; String, subtitle: String, publishedat; Date, author: Person){
        this. title = title
        this. subtitle = subtitle
        this. publishedat = publishedat
        this. author = author
    }

}

export default Document
