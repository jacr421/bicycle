import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ROUTER } from './app.routes'
import {RouterModule } from '@angular/router';
import { ShopComponent } from './components/shop/shop.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemComponent } from './components/shop/item/item.component';
import { ItemsService } from './service/items.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BagService } from './service/bag.service';
import { IsOpenService } from './service/isOpen.service';
import { BagComponent } from './components/header/bag/bag.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ShopComponent,
    BlogComponent,
    ContactComponent,
    ItemComponent,
    BagComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTER),
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    
  ],
  providers: [ItemsService,BagService,IsOpenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
