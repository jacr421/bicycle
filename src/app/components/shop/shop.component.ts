import { Component, OnInit, Injectable } from '@angular/core';
import { ItemsService } from '../../service/items.service';
import { Item } from '../../model/item.model';
import { BagService } from '../../service/bag.service';
import { IsOpenService } from '../../service/isOpen.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
@Injectable()
export class ShopComponent implements OnInit {

  constructor(private http:HttpClient,private itemService:ItemsService, private bagService:BagService,private isOpenServese:IsOpenService) { }
  items:any;
  material1:boolean;
  ngOnInit() {
    this.items=this.itemService.items;
    // this.http.get("http://localhost:3000/items/all").subscribe(
    //   res=>{
    //       console.log(res)
    //     // console.log(res['articles'])
    //     this.items=res;
    //   }
    // )
    // this.items=this.itemService.items;
  }
  addToBag(item){
    this.bagService.push(item);
    this.isOpenServese.bag=true;
  }
  getItem(){
   alert(this.material1)
  }
  
}
