import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';
import { IsOpenService } from '../../service/isOpen.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
  
})

export class RegistrationComponent implements OnInit {

  user:User=new User('','','','',0,'')
  constructor( private userService:UserService,private router:Router, private isOpen:IsOpenService) { }
  ngOnInit() {
    
  }
  addUser(){

    this.userService.addNewUser(this.user)
    this.router.navigate(['main'])
  }
  closeRegistration(){
    this.isOpen.registration=false;
  }
}
