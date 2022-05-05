import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient ) { }

  postProduct(data : any) {
    // return this.http.post<any>("http://localhost:3000/productList/", data);
    return this.http.post<any>("http://code.tsue.uz/qqb-api2/create.php", data);
  }
  
  getLoan() {
    return this.http.get<any>("http://code.tsue.uz/qqb-api2/read.php?data=loans");
  }
  
  getSmartVisa() {
    return this.http.get<any>("http://code.tsue.uz/qqb-api2/read.php?data=smartvisa");
  }

  getSettlementSheet() {
    return this.http.get<any>("http://code.tsue.uz/qqb-api2/read.php?data=settlement-sheet");
  }
  
  putProduct(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/productList/" + id, data);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>("http://localhost:3000/productList/" + id);
  }

  getExchange() {
    // return this.http.get<any>("http://localhost:3000/productList/");
    return this.http.get<any>("https://nbu.uz/exchange-rates/json/");
  }

}
