
export class Item{

    type:string;
    material:string;
    typeBrakes:string;
    price:number;
    country:string;
    numberOfGears:number;
    image:string[];
    shortDescription:string
    constructor(type:string,material:string,typeBrakes:string,price:number,country:string,numberOfGears:number,image:string[],shortDiscription:string){
        this.type=type;
        this.material=material;
        this.typeBrakes=typeBrakes;
        this.price=price;
        this.country=country;
        this.numberOfGears-numberOfGears;
        this.image=image;
        this.shortDescription=shortDiscription;
    }
}