import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
title : any;
signupForm: FormGroup;
test:any;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.title="Signup";
    this.test=false; //  *ngIf
    this.signupForm=this.fb.group({
      firstName :['',[Validators.required,Validators.minLength(3)]], //validator : conditions 
      lastName :['',[Validators.required,Validators.minLength(5)]],
      email :['',[Validators.required,Validators.email]],
      tel :['',[Validators.required,Validators.minLength(8),Validators.maxLength(13)]],
      password :['',[Validators.required,Validators.minLength(8)]],
      confirmPassword :['',[Validators.required]],
      
    },
    {
      validator: MustMatch('password','confirmPassword')
      }
    )
  }
signup(f:any){
console.log("my object",f);
let users=JSON.parse(localStorage.getItem("users")|| "[]");
let idUser = JSON.parse(localStorage.getItem("idUser")|| "1");
f.id=idUser;
f.role="client";
users.push(f);
localStorage.setItem("users",JSON.stringify(users));
localStorage.setItem("idUser",idUser+1);

}
}
