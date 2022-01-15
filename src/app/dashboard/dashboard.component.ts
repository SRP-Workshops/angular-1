import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  events: string[] = [];
  opened: boolean = false;
  
  shouldRun = true;
  constructor() { }

  ngOnInit() {
  }

}
