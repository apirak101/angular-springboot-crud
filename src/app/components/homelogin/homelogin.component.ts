import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homelogin',
  templateUrl: './homelogin.component.html',
  styleUrls: ['./homelogin.component.css']
})
export class HomeloginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  View(){
    this.router.navigate(["view"]);
  }

  Logout(){
    this.router.navigate(["home"]);
  }

  NewContent(){
    this.router.navigate(["add"]);
  }
}
