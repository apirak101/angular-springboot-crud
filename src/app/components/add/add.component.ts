import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Content from 'src/app/model/Content';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  contentt: Content = new Content();

  constructor(private router:Router, private service:ServiceService) {

  }

  ngOnInit(): void {
  }

  AddContent(){
    if(this.contentt != null){
      this.service.createContent(this.contentt)
      .subscribe(data => {
        alert("New Content Added Successfully..!!");
        this.router.navigate(["view"]);
      })
    }else{
      alert("Please add content!!");
    }

  }

  Back(){
    this.router.navigate(["view"]);
  }
}
