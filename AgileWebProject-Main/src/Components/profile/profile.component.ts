import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../app/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent  implements OnInit{
  userinfo:any;
  infou:any;

  constructor(private sharedservice:SharedService){

  }
  ngOnInit(): void {
    this.userinfo = this.sharedservice.getl();
    this.infou=JSON.parse(this.userinfo);
    console.log("user info",JSON.parse(this.userinfo));
      //console.log("user info",this.sharedservice.getl());
  }

  

}
