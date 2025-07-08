export class Product {
    constructor(public tag : string, public id : number, public name : string, public price : number, public imageUrl : string) {
        this.tag = tag;
        this.id = id;
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}