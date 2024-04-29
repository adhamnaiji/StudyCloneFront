import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/agent.service';
import { user } from '../../app/user';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-testapi',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './testapi.component.html',
  styleUrl: './testapi.component.css',
  providers:[HttpClient]
})
export class TestapiComponent implements OnInit {
 

  users!:any[];

  constructor(private agentservice:AgentService){
    
 }

 ngOnInit() {
   this.agentservice.findAll().subscribe(data => {
     this.users = data;
     console.log(this.users);
   });
 }


}
