import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { identity } from 'rxjs';
import Content from 'src/app/model/Content';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  contentt:Content = new Content();

  id!:number;


  constructor(private service:ServiceService, private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.contentt=new Content();
    this.id=this.route.snapshot.params['id'];
    this.service.getContentId(this.id).subscribe(
      data=>{console.log(data)
      this.contentt=data;
      }, error=>console.log(error)
    );
  }


  UpdateContent(){
    this.service.updateContent(this.id,this.contentt).subscribe(
      data=>console.log(data),error=>console.error());
    this.contentt=new Content();
    alert("New Update Successfully..!!");
    this.router.navigate(["view"]);

  }

  Back(){
    this.router.navigate(["view"]);
  }
}
