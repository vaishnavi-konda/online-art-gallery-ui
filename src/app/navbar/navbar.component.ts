import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  isLoggedIn: string | null = "";
  loginrole: string | null = "";

  constructor(private router: Router,){}
  
  ngOnInit(){
    this.isLoggedIn = sessionStorage.getItem('token');
    this.loginrole = sessionStorage.getItem("role");
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate([""]);
  }
}
