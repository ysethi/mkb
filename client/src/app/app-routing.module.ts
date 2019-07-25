import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';
import { ServicesComponent } from './services/services.component';
import { WorksComponent } from './works/works.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {path:'about', component:AboutComponent},
  {path:'',component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'form',component:FormComponent},
  {path:'services',component:ServicesComponent},
  {path:'view',component:ViewComponent},
  {path:'work',component:WorksComponent},
  {path:'login', component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
