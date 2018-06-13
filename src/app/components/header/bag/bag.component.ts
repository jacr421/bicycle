import { Component, OnInit } from '@angular/core';
import { BagService } from '../../../service/bag.service';
import { Item } from '../../../model/item.model';
import { IsOpenService } from '../../../service/isOpen.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {
  
  constructor(private bagService:BagService,private isOpen:IsOpenService) { }
  items:Item[]
  ngOnInit() {
    this.items=this.bagService.getAllItems();
    console.log(this.items)
  }
  remove(index){
    this.bagService.delete(index)
    this.items=this.bagService.getAllItems();
  }
  closeBag(){
    this.isOpen.bag=false;
  }
}
