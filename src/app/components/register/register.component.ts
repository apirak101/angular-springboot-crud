import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  user:User = new User();

  constructor(private router:Router , private service:ServiceService) { }

  ngOnInit(): void {
  }

  userRegister(){

    if(this.user.password == this.user.cpassword && this.user != null){
      this.service.registerUser(this.user).subscribe(data=>{
        alert("Successfully User is Register..!!");
        this.router.navigate(["login"]);
      })

      }else{
        alert("Passwords do not match..!!");
      }



  }

  SingIN(){
    this.router.navigate(["login"]);
  }
}
