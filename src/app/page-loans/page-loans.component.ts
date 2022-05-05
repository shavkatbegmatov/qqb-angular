import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/api.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-page-loans',
  templateUrl: './page-loans.component.html',
  styleUrls: ['./page-loans.component.scss']
})
export class PageLoansComponent {
  [x: string]: any;

  allBranchs: {[key: string]: string} = {
    "B-01":"Каракалпакский региональный филиал",
    "B-02":"Берунийский филиал",
    "B-03":"Кунгиратский филиал",
    "B-04":"Чимбойский филиал",
    "B-05":"Андижанский региональный филиал",
    "B-06":"Кургантепинский филиал",
    "B-07":"Ходжаабадский филиал",
    "B-08":"Бухарский региональный филиал",
    "B-09":"Когонский филиал",
    "B-10":"Джизакский региональный филиал",
    "B-11":"Янгиабадский филиал",
    "B-12":"Кашкадарьинский региональный филиал",
    "B-13":"Кукдалинский филиал",
    "B-14":"Яккабагский филиал",
    "B-15":"Навоийский региональный филиал",
    "B-16":"Наманганский областной филиал",
    "B-17":"Папский филиал",
    "B-18":"Учкурганский филиал",
    "B-19":"Самаркандский региональный филиал",
    "B-20":"Каттакурганский филиал",
    "B-21":"Сурхондарьинский региональный филиал",
    "B-22":"Кумкурганский филиал",
    "B-23":"Шурчинский филиал",
    "B-24":"Джаркурганский филиал",
    "B-25":"Сариасинский филиал",
    "B-26":"Сырдарьинский региональный филиал",
    "B-27":"Ташкентский городской региональный филиал",
    "B-28":"Ташкентский областной региональный филиал",
    "B-29":"Ферганский региональный филиал",
    "B-30":"Хорезмский региональный филиал",
    "B-31":"Янгиерский филиал",
    "B-32":"Кокандский филиал",
    "B-33":"Кувинский филиал",
    "B-34":"Маргиланский филиал",
    "B-35":"Ханкинский филиал",
    "B-36":"Хивинский филиал",
    "B-37":"Ахангаранский филиал",
    "B-38":"Бекобадский филиал",
    "B-39":"Янгиюльский филиал",
    "B-40":"Газалкентский филиал",
    "B-41":"Сергелийский филиал",
    "B-42":"Главное операционное управление",
    "B-43":"Галаасинский филиал",
    "B-44":"Яккасарайский филиал",
  };

  allTypeLoans: {[key: string]: string} = {
    "L-01":"Кредитный конвейр",
    "L-02":"Кредит Overdraft",
    "L-03":"Автокредит",
    "L-04":"Ипотечные кредиты",
    "L-05":"Микрозайм",
    "L-06":"Ипотечный кредит на жилье в сельской местности",
    "L-07":"Ипотечные кредиты по новому порядку",
    "L-08":"Ипотечный кредит на строительство и реконструкцию индивидуального жилья",
    "L-09":"Потребительский кредит «Зеленый»",
    "L-10":"Онлайн-кредит",
    "L-11":"Потребительский кредит",
    "L-12":"Кредит на образование",
  };

  allCurrency: {[key: string]: string} = {
    "C-01":"Сум",
    "C-02":"Доллар США",
  }

  // branch - Филиал
  // typeLoan - Вид кредита
  // currency - Валюта
  // startDate - Дата начала
  // expirationDate - Дата окончания
  // amount - Сумма по договору
  // arrears - Задолженности
  // percent - Процент
  // balance - Остаток

  displayedColumns: string[] = ['branch', 'typeLoan', 'currency', 'startDate', 'expirationDate', 'amount', 'arrears', 'percent', 'balance', 'action'];
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

  constructor(private breakpointObserver: BreakpointObserver, private dialog : MatDialog, private api : ApiService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '90%',
      minWidth: '300px',
      maxWidth: '500px',
    }).afterClosed().subscribe(val => {
      if(val === 'save') {
        this.getAllProducts();
      }
    })
  }
  getAllProducts() {
    this.api.getLoan()
    .subscribe({
      next: (res) => {
        let res_b = res.map((el: any) =>{
          let k = el["branch"];
          console.log(k);
          return el["branch"] = this.allBranchs[k];
        });
        let res_l = res.map((el: any) =>{
          let k = el["typeLoan"];
          console.log(k);
          return el["typeLoan"] = this.allTypeLoans[k];
        });
        let res_c = res.map((el: any) =>{
          let k = el["currency"];
          console.log(k);
          return el["currency"] = this.allCurrency[k];
        });
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
  deleteProduct(id: number) {
    this.api.deleteProduct(id)
    .subscribe({
      next: (res) => {
        alert("Product deleted successfully");
        this.getAllProducts();
      },
      error: () => {
        alert("Error while deleting the product!");
      }
    })
  }
  editProduct(row: any) {
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val => {
      if(val === 'update') {
        this.getAllProducts();
      }
    })
  }
}

interface CustomState {
  value: {
    [key:string]: any
  }
}

const defaultState : CustomState = {
  value: {}
}