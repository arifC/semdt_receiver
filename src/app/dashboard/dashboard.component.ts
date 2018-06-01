import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  collapsed:boolean = false;

  cards = [
    { title: 'Overview', cols: 2, rows: 1 },
    { title: 'Patient: Barbara Müller', cols: 1, rows: 2 },
    { title: 'Patient: Irmgard Schneider', cols: 1, rows: 2 }
  ];

  irmgard = {
    "Status": "sleeping",
    "Mental Health (today)": "unknown",
    "Logs" : "Irmgard did not wake up yet."
  }

  barbara = {
    "Status": "sleeping",
    "Mental Health (today)": "unknown",
    "Logs" : "Barbara did not wake up yet."
  }
}
