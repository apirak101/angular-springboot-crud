import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import Content from '../model/Content';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {



  constructor(private http:HttpClient) { }

  URL = 'http://localhost:8080/api/FindAll';

  getContents(){
    return this.http.get<Content[]>(this.URL);
  }
  createContent(content:Content){
    return this.http.post<Content>("http://localhost:8080/api/create",content);
  }
  getContentId(id:number){
    return this.http.get<Content>("http://localhost:8080/api/update/"+id);
  }
  updateContent(id:number,content:Content){
    return this.http.put<Content>("http://localhost:8080/api/update/"+id,content);
  }
  DeleteContentID(id:number){
    return this.http.delete<Content>("http://localhost:8080/api/"+id);
  }
  registerUser(user:User){
    return this.http.post("http://localhost:8080/user",user);
  }
  loginUser(user:User){
    return this.http.post("http://localhost:8080/login",user);
  }
}
