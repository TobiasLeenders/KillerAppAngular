import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userinformation',
  templateUrl: './userinformation.component.html',
  styleUrls: ['./userinformation.component.css']
})
export class UserinformationComponent implements OnInit {

  public username;

  constructor() { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
  }

}
