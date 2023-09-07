import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  isLoggedIn: string | null = "";
  loginrole: string | null = "";

  constructor(){}
  
  ngOnInit(){
    this.isLoggedIn = sessionStorage.getItem('token');
    this.loginrole = sessionStorage.getItem("role");
  }
}
