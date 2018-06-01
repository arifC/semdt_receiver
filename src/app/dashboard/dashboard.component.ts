import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(public http:HttpClient) {}

  collapsed:boolean = false;
  irmgard:any = {};
  barbara:any = {};

  ngAfterViewInit() {
    this.irmgardInit();
    this.barbaraInit();
  }

  irmgardInit() {
    this.http.get('assets/irmgard.json').subscribe((res) => {
      this.irmgard = res;
    });
  } 

  barbaraInit() {
    this.http.get('assets/barbara.json').subscribe((res) => {
      this.barbara = res;
      console.log(this.barbara);
    });
  }
}