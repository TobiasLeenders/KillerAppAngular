import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../api.service';
import {UserService} from '../../../user.service';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LoginResultModel} from '../../../models/LoginResultModel';
import {MatSnackBar} from '@angular/material';
import {LoginComponent} from '../login/login.component';
import {LoginerrorComponent} from '../loginerror/loginerror.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private api: ApiService, private user: UserService, private router: Router, public snackBar: MatSnackBar) { }

  username: string;
  password: string;
  email: string;

  usernamelogin: string;
  passwordlogin: string;

  usernamerest: string;

  ngOnInit() {
  }

  registerUser() {
    const body = new HttpParams()
      .set('username', this.username)
      .set('password', this.password)
      .set('email', this.email);
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})};
    const req = this.http.post('http://localhost:9998/api/register', body, httpOptions)
      .subscribe(
        res => {
          console.log(res);
        }
      );
  }

  tryLogin() {
    const bodyPost = new HttpParams()
      .set('username', this.usernamelogin)
      .set('password', this.passwordlogin);
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})};
    const req = this.http.post('http://localhost:9998/api/login', bodyPost, httpOptions)
      .subscribe(
        res => {
          this.usernamerest = res['username'];
          if (this.usernamerest === this.usernamelogin) {
            this.router.navigate(['user']);
            sessionStorage.setItem('username', this.usernamelogin);
          } else {
            this.snackBar.open('Gebruikersnaam of wachtwoord is onjuist', '', {
              duration: 3000
            });
            alert('Gebruikersnaam of wachtwoord is onjuist');
          }
          console.log(res);
        },
        error => {
          this.snackBar.open('Gebruikersnaam of wachtwoord is onjuist', '', {
            duration: 3000
          });
          console.log('Error: ', error);
        }
      );
  }
}
