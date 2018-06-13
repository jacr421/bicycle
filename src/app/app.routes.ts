import {Routes} from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShopComponent } from './components/shop/shop.component';
// import { BagComponent } from './components/bag/bag.component';


export const ROUTER:Routes=[
    {path:"",component:MainComponent},
    {path:"shop",component:ShopComponent},
    {path:"contact",component:ContactComponent},
    {path:"blog",component:BlogComponent},
    // {path:"bag",component:BagComponent},

]