import { Component, OnInit } from '@angular/core';
import {ScheduleFrequency} from './ScheduleFrequency';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-newschedule',
  templateUrl: './newschedule.component.html',
  styleUrls: ['./newschedule.component.css']
})

export class NewscheduleComponent implements OnInit {

  activityname: string;
  schedulename: string;
  startdate: string;
  scheduleduration: string;
  frequencyschedule: string;
  activitylist: String[] = [];

  userid: string = sessionStorage.getItem('userid');

  minDate = new Date(2019, 1, 1);
  maxDate = new Date(2050, 1, 1);

  fieldArray: Array<any> = [];
  newAttribute: any = {};

  firstField = true;
  firstFieldName = 'First Item name';
  isEditItems: boolean;

  schedulefrequency: ScheduleFrequency[] = [
    {value: 'DAILY', viewValue: 'Daily'},
    {value: 'WEEKLY', viewValue: 'Weekly'},
    {value: 'MONTHLY', viewValue: 'Monthly'},
    {value: 'YEARLY', viewValue: 'Yearly'}
  ];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  addFieldValue() {
    if (this.activityname.length > 1) {
      this.activitylist.push(this.activityname);
    }
  }

  addSchedule() {
    const body = new HttpParams()
      .set('schedulename', this.schedulename)
      .set('duration', this.scheduleduration)
      .set('frequency', this.frequencyschedule)
      .set('startTime', this.startdate)
      .set('group_id', '1')
      .set('user_id', sessionStorage.getItem('userid'))
      .set('activities', this.activitylist.join(', '))
      .set('categories', this.activitylist.join(', '));
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})};
    const req = this.http.post('http://' + location.hostname + ':9998/api/newSchedule', body, httpOptions)
      .subscribe(
        res => {
          console.log(res);
        }
      );
  }
}
