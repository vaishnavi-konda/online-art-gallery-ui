import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export class Product{
    constructor(public productId: number, public productName:string, public artist:string,
        public stock:number,
        public categoryId:number,
        public categoryName:string,
        public price:number,
        public productDescription:string,
        public imageName:string) {}
}

export abstract class AbstractHttpCommunication
{
    abstract GetProducts():Observable<Product[]>;
    abstract getProductsByCategory(category: string): Observable<any[]>
    abstract getListOfProducts(ids: number[]): Observable<HttpResponse<Product[]>>;
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

    override getProductsByCategory(category: string): Observable<any[]> {
        const url = `${this.url}/products/category/${category}`;
        return this.client.get<any[]>(url);
    }
    
    override getListOfProducts(ids: number[]): Observable<HttpResponse<Product[]>>{
        console.log("iam in http comm list func");
        console.log("...", ids);
        var selectedProducts: Product[] = [];
        // for (const id of ids) {
            // const product = products.find((p) => p.productId == id);
        // if (product) {
        //     selectedProducts.push(product);
        // }
        // }
        // console.log(selectedProducts);
        const url = `${this.url}/listOfProducts`;
        const head=new HttpHeaders({'content-type':'application/json'});
        var result=this.client.post<Product[]>(url, ids, {headers:head,observe:'response'});
        return result;
    }

}
//http://localhost:5099/swagger/index.html