import { Component, OnInit } from '@angular/core';
import { IsOpenService } from '../../service/isOpen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  
  constructor(private isOpen:IsOpenService) { }

  ngOnInit() {
  }
  openBag(){
    this.isOpen.bag=true;
  }
  openLogin(){
    this.isOpen.login=true;
  }
  openRegistration(){
    this.isOpen.registration=true;
  }
}
