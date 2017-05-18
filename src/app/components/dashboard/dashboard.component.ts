import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  quarters;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.quarters = this.db.list('quarters');
  }

}
