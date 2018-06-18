import {Routes} from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';
import { AdminComponent } from './components/admin/admin.component';
import { ItemComponent } from './components/shop/item/item.component';
// import { BagComponent } from './components/bag/bag.component';


export const ROUTER:Routes=[
    {path:"",component:MainComponent},
    {path:"shop",component:ShopComponent},
    {path:"contact",component:ContactComponent},
    {path:"blog",component:BlogComponent},
    {path:"admin",component:AdminComponent},
    {path:"item/:id",component:ItemComponent},
]