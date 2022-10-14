import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contents:any;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getContents()
    .subscribe(data=>{
      this.contents=data;
    })
  }

  Order(){
    alert("ใจเย็นวัยรุ่น!!")
  }

}
