import { Item } from "../model/item.model";

export class BagService{

    private items:Item[]=[];


    push(item){
        this.items=JSON.parse(localStorage.getItem('bag'))
        this.items.push(item);
        localStorage.setItem('bag',JSON.stringify(this.items))
    }
    delete(index){
        this.items=JSON.parse(localStorage.getItem('bag'))
        this.items.splice(index,1);
        localStorage.setItem('bag',JSON.stringify(this.items))
    }
    getAllItems(){
        this.items=JSON.parse(localStorage.getItem('bag'))
        return this.items
    }
}