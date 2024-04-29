import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../ReusableComponents/button/button.component';
import { Router } from '@angular/router';
import {RouterModule} from '@angular/router';
import { environment } from '../../environments/environments';
import { CommonModule, NgIf } from '@angular/common';
import { AppComponent } from '../../app/app.component';
import { AgentService } from '../services/agent.service';
import { SharedService } from '../../app/shared.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonComponent,RouterModule,CommonModule,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
login:any=null;
userinfo:any;
  infou:any;


constructor(private router:Router,public agentservice:AgentService,private sharedservice:SharedService){

}
  ngOnInit(): void {
    
      this.login = this.sharedservice.login;
      console.log(this.sharedservice.getl());

      this.userinfo = this.sharedservice.getl();
    this.infou=JSON.parse(this.userinfo);
    };
  

  GoToSignIn():void {
    console.log("this button works fine");
    //console.log(environment.login);
    // new AppComponent().logout();
    this.router.navigate(['/signin']);

  }

  get getll(){
    return this.sharedservice.getl();
  }

   getllout(){
     this.sharedservice.getout();
     this.router.navigate(['/acceuil']);
  }

  getin(){
    this.login=this.sharedservice.getl();
    this.router.navigate(['/acceuil']);
 }

  onSelect(): void {
    const selectElement = document.getElementById('disabledSelect') as HTMLSelectElement;
    const selectedValue = selectElement.value;
    
    if (selectedValue) {
      this.router.navigate([selectedValue]);
    }
  }


  



}
