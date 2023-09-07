import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractSecurityCommunication, AppUserCredentialsModel, TokenAndRole, LoginService} from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  message: string='';

  constructor(private router: Router, private service: AbstractSecurityCommunication) {}
  getToken(userid:string, pwd:string):void{    
    var observableObj = this.service.getTokenAndAccesProtectedResources(userid, pwd);
    observableObj.subscribe({
      next:(result) => {
        var res = JSON.stringify(result.body);
        var output = JSON.parse(res);

        sessionStorage.setItem('token', output.token);
        sessionStorage.setItem('role', output.role);

        if(sessionStorage.getItem("role") == "User") {
          this.router.navigate(['/products']);
        }
        // sessionStorage.clear();
        // sessionStorage.removeItem('token');
        // alert(JSON.stringify(result));
      },
      error:err => this.message=err.message
    })
  }

  logout(): void {
    sessionStorage.clear();
  }

}
