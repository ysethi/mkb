import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { WorksComponent } from './works/works.component';
import { VenuesComponent } from './venues/venues.component';
import { ContactComponent } from './contact/contact.component';


import { ViewComponent } from './view/view.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    WorksComponent,
    VenuesComponent,
    ContactComponent,
    ViewComponent,
    BootstrapComponent,
    LoginComponent,
    SignupComponent
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
