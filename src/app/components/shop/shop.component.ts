import { Component, OnInit, Injectable } from '@angular/core';
import { ItemsService } from '../../service/items.service';
import { Item } from '../../model/item.model';
import { BagService } from '../../service/bag.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
@Injectable()
export class ShopComponent implements OnInit {

  constructor(private itemService:ItemsService, private bagService:BagService ) { }
  items:Item[]=[]
  ngOnInit() {
    this.items=this.itemService.items;
  }
  addToBag(item){
    console.log(item)
    this.bagService.push(item);

  }

}
