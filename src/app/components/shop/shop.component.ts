import { Component, OnInit, Injectable } from '@angular/core';
import { ItemsService } from '../../service/items.service';
import { Item } from '../../model/item.model';
import { BagService } from '../../service/bag.service';
import { IsOpenService } from '../../service/isOpen.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
@Injectable()
export class ShopComponent implements OnInit {

  constructor(private itemService:ItemsService, private bagService:BagService,private isOpenServese:IsOpenService) { }
  items:Item[]=[]
  ngOnInit() {
    this.items=this.itemService.items;
  }
  addToBag(item){
    this.bagService.push(item);
    this.isOpenServese.bag=true;
  }

}
