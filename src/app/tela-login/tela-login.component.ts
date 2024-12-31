import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-tela-login',
  standalone: true,
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss'],
  imports: [NgModule],
})
export class TelaLoginComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

}
