import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  contents:any;
  constructor(private service:ServiceService, private router:Router) {

   }

  ngOnInit() {
    this.service.getContents()
    .subscribe(data=>{
      this.contents=data;
    })
  }

  Editer(id:number){
    this.router.navigate(['edit',id]);
  }

  Delete(id:number){

    if(window.confirm('Do you want to go ahead?'))

    this.service.DeleteContentID(id).subscribe((res)=>{
      this.contents.splice(id,1);
      if(1){
        alert("Delete Successfully..!!");
        location.reload();
      }
    })
  }

  View(){
    this.router.navigate(["view"]);
  }

  NewContent(){
    this.router.navigate(["add"]);
  }

  Logout(){
    this.router.navigate(["home"]);
  }
}
