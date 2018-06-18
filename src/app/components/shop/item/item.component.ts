import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../../service/items.service';
import { RouterPreloader, ActivatedRoute } from '@angular/router';
import { Item } from '../../../model/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private itemService:ItemsService,private router:ActivatedRoute) { }
  item:Item
  ngOnInit() {
    let index=this.router.snapshot.params['id']
    this.item=this.itemService.items[index]
  }

}
