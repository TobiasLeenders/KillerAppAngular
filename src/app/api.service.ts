import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginResultModel} from './models/LoginResultModel';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
      
  }

  login(username: string, password: string): Observable<LoginResultModel>{
    return this.http.post<LoginResultModel>('http://localhost:9998/api/login', {
      username: username,
      password: password
    });
  }
}
