import { Injectable, numberAttribute } from '@angular/core';
import { Product } from '../HttpCommunication';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export abstract class AbstractAdminCommunication
{
    abstract ProductById(productId: number): Observable<Product>;
    abstract ProductsByIds(productIds: number[]): Observable<object>;
}
@Injectable()
export class AdminService extends AbstractAdminCommunication{

  url = "http://localhost:5099"; // check this port in REST API -> Properties -> launchSettings.json

  constructor(private client:HttpClient) {super();}

  override ProductById(productId: number): Observable<Product> {
    let path=`${this.url}/productsId/${productId}`;
    let token=`Bearer ${sessionStorage.getItem("token")}`;
    const headers = { headers: new HttpHeaders({observe: 'response',Authorization:token }) };
    var result = this.client.get<Product>(path, headers); // make GET http request
    return result;

}
override ProductsByIds(productIds: number[]): Observable<object> {
  let path=`${this.url}/getProductsByIds`;
  const headers = { headers: new HttpHeaders({observe: 'response' }) };
  var result = this.client.post(path,productIds, headers); // make GET http request
  return result;

}

}
