import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export class Product{
    constructor(public ProductId: number, public ProductName:string, public Artist:string,
        public stock:number,
        public categoryId:number,
        public price:number,
        public productDescription:string,
        public imageName:string) {}
}

export abstract class AbstractHttpCommunication
{
    abstract GetProducts():Observable<Product[]>;
    // abstract DeleteEmployee(code:number):Observable<object>;
    // abstract AddEmployee(em:emp):Observable<object>;
    // abstract UpdateEmployee(em:emp):Observable<object>;
}

@Injectable({providedIn:'root'})

export class HttpCommunication extends AbstractHttpCommunication{
    url = "http://localhost:5240"; // check this port in REST API -> Properties -> launchSettings.json

    constructor(private client:HttpClient) {super();}
    override GetProducts():Observable<Product[]> {
        let path = `${this.url}/products`;

        const headers= {headers:new HttpHeaders({observe:'response'})};

        var result = this.client.get<Product[]>(path, headers);
        return result;
    }
}


