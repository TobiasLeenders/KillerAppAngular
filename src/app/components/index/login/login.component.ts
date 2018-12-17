import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../api.service';
import {UserService} from '../../../user.service';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LoginResultModel} from '../../../models/LoginResultModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private api: ApiService, private user: UserService, private router: Router) { }

  //username: string;
  //password: string;

  username = 'test2';
  password = 'wachtwoord2';

  ngOnInit() {
  }

  tryLogin() {
    /*this.api.login(
      this.username,
      this.password
    )
      .subscribe(
        r => {
          if (r.username) {
            this.user.setToken(r.username);
            this.router.navigateByUrl('/user');
          }
        },
        r => {
          alert(r.error.error);
        });*/
    const bodyPost = {
      'username': '1',
      'password': '2'
    }
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    const req = this.http.post('http://' + location.hostname + ':9998/api/login', bodyPost, httpOptions)
      .subscribe(
        res => {
          console.log(res);
        }
      );
  }

  login2(): void {

  }

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['user']);
      sessionStorage.setItem('username', this.username);
    } else {
      alert('Gebruikersnaam of wachtwoord is onjuist');
    }
  }
}
