import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  token: string | null = "";
  isLoggedIn!:boolean;
  loginrole: string | null = "";
  username: string | null = "";

  constructor(private router: Router,private cdr: ChangeDetectorRef){}
  
  ngOnInit(){
    this.token = sessionStorage.getItem('token');
    this.loginrole = sessionStorage.getItem("role");
    this.username = sessionStorage.getItem('username');
    if(this.token!=null){
      this.isLoggedIn=true;
      this.cdr.detectChanges();
    }
      
  }

  logout(){
    sessionStorage.clear();
    this.isLoggedIn=false;
    this.cdr.detectChanges();
    this.router.navigate([""]);
    
  }
}
