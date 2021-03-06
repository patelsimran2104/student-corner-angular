import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUserService } from './login-user.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg='';

  constructor(private loginService : LoginUserService, private _router:Router) { }

  public ngOnInit(): void {
    if (this.loginService.isLoggedIn) {
      this._router.navigate([ 'home' ]);
    }
  }

  loginUser() {
    this.loginService.loginUserFromRemote(this.user).subscribe((data: any) => {
      console.log("response received", data);
      this._router.navigate(['/home']);
    }, (error: any) => {
        console.log("exception occured");
        this.msg="Bad credentials, please enter valid emailid and password";
      }
    );
  }

}
// loginUser(){
//   this._service.loginUserFromRemote(this.user).subscribe(
//     data =>{ console.log("response received");
//     this._router.navigate(['/layout'])
//   },
//     error => {
//       console.log("exception occured");
//       this.msg="Bad credentials, please enter valid emailid and password";
//     }
//   );