import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export abstract class AbstractSecurityCommunication
{
    abstract getTokenAndAccesProtectedResources(userName:string, password:string):Observable<HttpResponse<TokenAndRole>>;
}
@Injectable()
export class LoginService extends AbstractSecurityCommunication{
  url = "http://localhost:5099"; // check this port in REST API -> Properties -> launchSettings.json

  constructor(private client:HttpClient) {super();}
  override getTokenAndAccesProtectedResources(userName:string, password:string):Observable<HttpResponse<TokenAndRole>>{
    const url = `${this.url}/login`;

    var credentials = new AppUserCredentialsModel(userName, password);
    const headers =new HttpHeaders({'content-type':'application/json'});
    var result = this.client.post<TokenAndRole>(url,credentials,{headers:headers, observe:'response'});

    return result;
}
}


export class TokenAndRole{
  constructor(public token:string, public role:string) {}
}

export class AppUserCredentialsModel{
  constructor(public userName:string, public userPassword:string){}
}
