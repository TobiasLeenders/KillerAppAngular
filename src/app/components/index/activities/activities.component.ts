import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Checktoken} from '../../../checktoken';
import {ScheduleActivities} from './ScheduleActivities';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ActivitiesComponent implements OnInit {
  /*private ELEMENT_DATA: ScheduleActivities[] = this.getSchedules();

  dataSource: ScheduleActivities[] = this.ELEMENT_DATA;
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  expandedElement: ScheduleActivities | null;*/

  constructor(private http: HttpClient, private router: Router) {
    this.getSchedules();
    Checktoken.checkToken(this.http, this.router);
  }

  ngOnInit() {

  }

  getSchedules() {
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})};
    const req = this.http.get('http://' + location.hostname + ':9998/api/getSchedules/1', httpOptions)
      .subscribe(
        res => {
          console.log(res);
          return res;
        }
      );
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
