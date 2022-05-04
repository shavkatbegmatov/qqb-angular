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
  selector: 'app-page-smartvisa',
  templateUrl: './page-smartvisa.component.html',
  styleUrls: ['./page-smartvisa.component.scss']
})
export class PageSmartvisaComponent {

  displayedColumns: string[] = ['currency', 'cardNumber', 'cardAccount', 'balance', 'status'];
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

  constructor(private breakpointObserver: BreakpointObserver, private dialog : MatDialog, private api : ApiService) { }
  

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
    this.api.getProduct()
    .subscribe({
      next: (res) => {
        console.table(res);
        let k:string = res[0]["branch"];
        console.log(k);
        // res[0]["branch"] = allBranchs[0];
        // let res2 = res.map((el: any) =>{
        //   let k = el["branch"];
        //   console.log(k);
        //   return el["branch"] = allBranchs[k];
        // });
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
