import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  newActivity() {

    const activities = ['a', 'b', 'c'];
    const categories = ['cat1', 'cat2', 'cat3'];
    const body = new HttpParams()
      .set('schedulename', 'TestSchedule')
      .set('duration', '10')
      .set('activities', activities.toString())
      .set('categories', categories.toString());
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})};
    const req = this.http.post('http://' + location.hostname + ':9998/api/newSchedule', body, httpOptions)
      .subscribe(
        res => {
          console.log(res);
        }
      );
  }

}
