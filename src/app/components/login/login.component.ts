import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user:User = new User();

  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {

  }

  userLogin(){
    this.service.loginUser(this.user).subscribe(data=>{
      alert("Login Successfully!!");
      this.router.navigate(["homelogin"]);
    },error=>alert("Username or password is incorrect. please try again!!")
    );
  }

  SingUP(){
    this.router.navigate(["register"]);
  }

  Back(){
    this.router.navigate(["home"]);
  }
}
