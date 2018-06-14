import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';
import { IsOpenService } from '../../service/isOpen.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    email:'',
    password:""
  }
  users:User[]=[]
  constructor(private userService:UserService,private router:Router,private isOpen:IsOpenService) { }
  login(){
    let i;
    for(i=0;i<this.users.length;i++){
      if(this.user.email==this.users[i].email)
        if(this.user.password==this.users[i].password)
        this.userService.userLogin(this.users[i]);
     }
     if(i==this.users.length)
      console.log('error login')
      this.isOpen.login=false;
  }
  ngOnInit() {
    this.users=JSON.parse(localStorage.getItem('users'))
  }
  openRegistration(){
    this.isOpen.login=false;
    this.isOpen.registration=true;
  }
  closeLogin(){
    this.isOpen.login=false;
  }
}
