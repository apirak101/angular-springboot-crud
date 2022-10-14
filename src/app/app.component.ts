import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Apirak Content';

  constructor(private router:Router){}

  // View(){
  //   this.router.navigate(["view"]);
  // }

  // NewContent(){
  //   this.router.navigate(["add"]);
  // }

  Login(){
    this.router.navigate(["login"]);
  }

}
