import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class User{
  constructor(
    public userName:string,
    public userPassword:string,
    public userEmail:string,
    public userPhone:number,
    public userAddress:string,
    public userRole:string
  ){}
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:5099"; // Replace with your API endpoint

  constructor(private client: HttpClient) {}

  AddUser(user: User): Observable<any> {
    const path=`${this.url}/users/add`;
    const head=new HttpHeaders({'content-type':'application/json'});
    var result=this.client.post(path,user,{headers:head,observe:'response'});
    return result;
    
  }

  DoesUserExist(username: string):any {
    const path=`${this.url}/users/username/${username}`;

    const head=new HttpHeaders({'content-type':'application/json'});
    var result = this.client.get(path,{headers:head,observe:'response'});
    return result;
  }
}
