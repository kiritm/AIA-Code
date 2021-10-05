
import { HttpClient } from '@angular/common/http';
//import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup;
  constructor(private FormBuilder : FormBuilder,  private http : HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.FormBuilder.group({
      email:[''],
      password:['']
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        alert("found user :" + a.email );
        alert(" search email from form"+this.loginForm.value.email);
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login success.");
        this.loginForm.reset();
        this.router.navigate(['dashboard'])
      }else{
        alert("User not found");
      }     
    },err=>{
      alert("User registration fail got error.")    
    })
  }
}
