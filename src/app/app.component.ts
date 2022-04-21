import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './services/api.service';
import { MatTableDataSource } from '@angular/material/table';

import {
  BreakpointObserver,
  BreakpointState
} from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'QQB';
  dataSource!: MatTableDataSource<any>;
  constructor(private api : ApiService, public breakpointObserver: BreakpointObserver){ }
  ngOnInit(): void {
      this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport width is 500px or greater!');
        } else {
          console.log('Viewport width is less than 500px!');
        }
      });
  }
}
