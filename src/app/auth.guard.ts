import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}

@Injectable({ providedIn: 'root' })
export class NeedAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  canActivate() {
    const token = localStorage.getItem('token');
    const userid = localStorage.getItem('userid');

    if (token != null || userid != null) {
      const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'responseType': 'text'})};
      const req = this.http.get('http://' + location.hostname + ':9998/api/checkToken/' + sessionStorage.getItem('userid') + '/'
        + sessionStorage.getItem('token'), httpOptions)
        .subscribe(
          res => {
            console.log(res);
            if (res === 'FalseToken') {
              sessionStorage.clear();
              this.router.navigate(['login']);
            }
          }
        );
    } else {
      localStorage.clear();
      alert('Uw sessie is verlopen.');
      this.router.navigate(['/home']);
      return false;
    }
  }
}
