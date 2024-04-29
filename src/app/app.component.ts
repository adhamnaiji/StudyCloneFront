import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../Components/navbar/navbar.component';
import { MainPageComponent } from '../Components/main-page/main-page.component';
import { SignInComponent } from '../Components/sign-in/sign-in.component';
import { SignUpComponent } from '../Components/sign-up/sign-up.component';
import { ResetPaswwordComponent } from '../Components/reset-paswword/reset-paswword.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,MainPageComponent,SignInComponent,SignUpComponent,ResetPaswwordComponent,HttpClientModule,
    ReactiveFormsModule,FormsModule,NgxWebstorageModule,CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[HttpClient]

})
export class AppComponent  implements OnInit {
  showNavbar: boolean = true;
  constructor( public router:Router){
   

  }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !this.router.url.startsWith('/admin');
      }
    });
  }

  logout(){
    sessionStorage.setItem('login', 'false');
  }

  login(){
    sessionStorage.setItem('login', 'true');
  }

  get(){
    return sessionStorage.getItem('login');
  }

  
  

}

