import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/agent.service';
import { SharedService } from '../../app/shared.service';
import { CommonModule } from '@angular/common';
import { Task } from '../../app/Task';
import { user } from '../../app/user';

@Component({
  selector: 'app-users-taches',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-taches.component.html',
  styleUrl: './users-taches.component.css'
})
export class UsersTachesComponent implements OnInit {
taches: Task[]=[];

  login: any;
  userinfo!: any;
  infou: any;
  constructor(private agentservice:AgentService,private sharedservice:SharedService){

  }


  ngOnInit(): void {
    this.login = this.sharedservice.login;
      console.log(this.sharedservice.getl());

      this.userinfo = this.sharedservice.getl();
    this.infou=JSON.parse(this.userinfo);

    this.agentservice.gettaches(this.infou.id).subscribe(p=>{
      if (Array.isArray(p)) {
        // If the response is an array, directly assign it to the taches array
        this.taches = p;
      } else {
        // If the response is not an array, push it to the taches array
        this.taches.push(p);
      }
      
    })

    console.log(this.taches);
  }





}
