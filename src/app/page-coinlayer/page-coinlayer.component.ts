import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
// import * as moment from 'moment';

@Component({
  selector: 'app-page-coinlayer',
  templateUrl: './page-coinlayer.component.html',
  styleUrls: ['./page-coinlayer.component.scss']
})
export class PageCoinlayerComponent {

  // branch - Филиал
  // typeLoan - Вид кредита
  // currency - Валюта
  // startDate - Дата начала
  // expirationDate - Дата окончания
  // amount - Сумма по договору
  // arrears - Задолженности
  // percent - Процент
  // balance - Остаток

  displayedColumns: string[] = ['title', 'code', 'cb_price', 'nbu_buy_price', 'nbu_cell_price', 'date'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private dialog : MatDialog, private api : ApiService) {
    // this.test();
  }

  ngOnInit(): void {
    this.getAllExchange();
  }

    openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%',
      minWidth: '350px',
    }).afterClosed().subscribe(val => {
      if(val === 'save') {
        this.getAllExchange();
      }
    })
  }
  getAllExchange() {
    this.api.getExchange()
    .subscribe({
      next: (res) => {
        // console.log(moment(res[0]['date']).format());
        // console.log(moment().format());
        // res['date'] = moment().format();
        // console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert("Error while feching the Record!");
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  // test() {
  //   const date = moment();
  //   let todayDate = date.format('M/D/YYYY');
  //   console.log(todayDate);
  // }
}
