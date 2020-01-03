import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import { Router } from '@angular/router';
import {AppConst} from "../const/main.const";

interface Data {
  results: Array<string>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  userData: Array<any>;

  constructor(private fb: FormBuilder,
         public authService: AuthService,
         private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      "loginField": ['', Validators.required],
      "passwordField": ['', Validators.required],
    });
  }

  // checkUser() {
  //   this.authService.setUser().subscribe((data: Data) => {
  //     this.userData = data.results;
  //     for (let i=0; i < this.userData.length; i++) {
  //       let userDataName = this.userData[i].userName;
  //       let userDataPassword = this.userData[i].password;
  //       if (userDataName == this.loginForm.controls['loginField'].value &&
  //         userDataPassword == this.loginForm.controls['passwordField'].value) {
  //         sessionStorage.setItem('userName', this.loginForm.controls['loginField'].value);
  //         this.swapTo();
  //       }
  //     }
  //   });
  // }

  swapTo(){
    this.router.navigate([AppConst.DASHBOARD_ROUTER]);
  }

}
