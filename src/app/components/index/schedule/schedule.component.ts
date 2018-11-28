import {Component, Injectable, OnInit} from '@angular/core';
import {Exercise} from '../../../models/input.model';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/table';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }

}
var Exercise = ['1', 1, 1]
var Exercises: Exercise[] = [
  {sport: 'Walking', start: 5, duration: 1},
];

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  displayedColumns: string[] = ['sport', 'start', 'duration'];
  dataSource = new ExampleDataSource();

  public tableArray: Array<any> = [];
  public newEntry: any = {};

  constructor() { }

  ngOnInit() {
  }

  addFieldValue() {
    this.tableArray.push(this.newEntry)
    this.newEntry = {};
  }

  deleteFieldValue(index) {
    this.tableArray.splice(index, 1);
  }
}

export class ExampleDataSource extends DataSource<Exercise> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<Exercise[]>(Exercises);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Exercise[]> {
    return this.data;
  }

  disconnect() {}
}
