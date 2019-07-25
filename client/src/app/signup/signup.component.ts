// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import{ UsersService} from '../users.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name;
  email;
  password;
  address;
  city;
  image;

  constructor(private us:UsersService) { }

  ngOnInit() {
    
  }
  addData(){
    this.us.addData(this.name,this.email,this.address,this.password,this.city,this.image);
    if(this.password.length<10){
      alert('Password Must be atleast 10 Characters long');
    }
    else
    {
      this.us.register(this.name,this.address,this.city,this.password,this.email);
      alert('Registeration Complete');
    }
    console.log(this.password.length)
    // alert(this.password.lenght);
    // console.log(this.name)

  }

}
