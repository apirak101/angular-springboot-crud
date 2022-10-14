import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { HomeloginComponent } from './components/homelogin/homelogin.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { ViewComponent } from './components/view/view.component';


const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'navbar',component:NavbarComponent},
  {path:'home',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'view', component:ViewComponent},
  {path:'add', component:AddComponent},
  {path:'edit/:id', component:EditComponent},
  {path:'homelogin', component:HomeloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
