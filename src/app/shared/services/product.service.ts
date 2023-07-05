import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpOptions: any;
  constructor(private http: HttpClient
  ) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + sessionStorage.getItem("token")
      })
    }
  }
  public getProducts(): Observable<any> {
    if (sessionStorage.getItem("token") == null)
      return this.http.get("http://localhost:4500/products", this.httpOptions)
    else
      return this.http.get("http://localhost:4500/660/products", this.httpOptions);
  }

  public getProducts2(pattern: string): Observable<any> {
    if (sessionStorage.getItem("token") == null)
      return this.http.get("http://localhost:4500/products?type=" + pattern, this.httpOptions)
    else
      return this.http.get("http://localhost:4500/660/products?type=" + pattern, this.httpOptions);
  }

  public getSalesbyproduct(): Observable<any> {
    let retval: any;
    retval = this.http.get("http://localhost:4500/salesbyproduct", this.httpOptions);
    return retval
  }

  public getSalesbymonth(): Observable<any> {
    let retval: any;
    retval = this.http.get("http://localhost:4500/salesbymonth", this.httpOptions);
    return retval
  }

  public AddProductDetails(obj:any,fflag:boolean):Observable<any> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    if(!fflag)
      return this.http.post("http://localhost:4500/products",obj,this.httpOptions)
    return this.http.post("http://localhost:4500/products",obj)
  }
}
