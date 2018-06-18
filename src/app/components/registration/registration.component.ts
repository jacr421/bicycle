import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';
import { UserService } from '../../service/user.service';
import { IsOpenService } from '../../service/isOpen.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
  
})

export class RegistrationComponent implements OnInit {

  user:User=new User('','','','',0,'')
  constructor( private userService:UserService,private router:Router, private isOpen:IsOpenService,
    private http:HttpClient) { }
  ngOnInit() {
    
  }
  addUser():Observable<User> {

    this.isOpen.registration=false;
    this.isOpen.login=true;

    console.log(this.user);
    return this.http.post<User>('localhost:3000/user/singup',this.user);
  }
  closeRegistration(){
    this.isOpen.registration=false;
  }
}
