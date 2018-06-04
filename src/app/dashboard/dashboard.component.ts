import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(public http:HttpClient) {
    setInterval(() => {
      this.irmgardInit();
      this.rudolfInit();
    }, 3000);
  }

  irmgard:any = {};
  rudolf:any = {};

  ngAfterViewInit() {
    this.irmgardInit();
    this.rudolfInit();
  }

  irmgardInit() {
    this.http.get('assets/irmgard.json').subscribe((res) => {
      this.irmgard = res;
    });
  } 

  rudolfInit() {
    this.http.get('assets/rudolf.json').subscribe((res) => {
      this.rudolf = res;
    });
  }
}