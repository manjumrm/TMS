import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // designation;
  // user:User = new User();
    invalid:boolean = false;

  constructor(private router :Router) { }

  ngOnInit() {
  }

  valid(userName:string,password:string, FormData):any{
    if((userName=='SuperAdmin' || userName =='TicketAdmin' || userName=='VetologicAdmin' || userName=='VetologicUser') && password=='12345678'){
      localStorage.setItem("userName",userName);
      return this.router.navigate(['/default']);
   }else{
    this.invalid=true;
      FormData.clear();
      return false;
    }
    }


  // valid(name:string,password:string):any{
  //   if(name=='faiz'&& password=='faiz'){
  //     alert("login success");
  //     return this.router.navigate(['/default']);
  //   }
  //   else{
  //     return false;
  //   }
  // }
}
