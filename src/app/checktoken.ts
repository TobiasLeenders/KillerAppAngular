import { Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export class Checktoken {

  constructor() {
  }

  static checkToken(http: HttpClient, router: Router) {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'responseType': 'text'})};
    const req = http.get('http://' + location.hostname + ':9998/api/checkToken/'
      + sessionStorage.getItem('userid') + '/' + sessionStorage.getItem('token'), httpOptions)
      .subscribe(
        res => {
          console.log(res);
          if (res === 'FalseToken') {
            sessionStorage.clear();
            router.navigate(['login']);
          }
        }
      );
  }
}
