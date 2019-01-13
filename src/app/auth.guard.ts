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
    const token = sessionStorage.getItem('token');
    const userid = sessionStorage.getItem('userid');

    if (token != null || userid != null) {
      const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})};
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
      sessionStorage.clear();
      alert('Uw sessie is verlopen.');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
