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
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { BagService } from './service/bag.service';
import { IsOpenService } from './service/isOpen.service';
import { BagComponent } from './components/header/bag/bag.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserService } from './service/user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    ShopComponent,
    BlogComponent,
    ContactComponent,
    ItemComponent,
    BagComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTER),
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [ItemsService,BagService,IsOpenService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
