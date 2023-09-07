import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractSecurityCommunication, AppUserCredentialsModel, TokenAndRole, LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  message: string='';

  constructor(private service: AbstractSecurityCommunication) {}
  getToken(userid:string, pwd:string):void{    
    var observableObj = this.service.getTokenAndAccesProtectedResources(userid, pwd);
    observableObj.subscribe({
      next:(result) => {
        var res = JSON.stringify(result.body);
        var output = JSON.parse(res);

        sessionStorage.setItem('token', output.token);
        sessionStorage.setItem('role', output.role);
        // sessionStorage.clear();
        // sessionStorage.removeItem('token');
        // alert(JSON.stringify(result));
      },
      error:err => this.message=err.message
    })
  }
}
