import { Component, NgModule, OnInit } from '@angular/core';
import { Agent } from '../Shared/Models/Agent';
import { AgentService } from '../services/agent.service';
import {ActivatedRoute, Router, RouterModule, RouterOutlet} from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { ButtonComponent } from '../../ReusableComponents/button/button.component';


@Component({
  selector: 'app-agents-page',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule,SearchComponent,ButtonComponent],
  templateUrl: './agents-page.component.html',
  styleUrl: './agents-page.component.css'
})
export class AgentsPageComponent implements OnInit {

  agents:Agent[]=[];
  valueS="Search agents by Speciality";
admin: boolean=false;
  
    constructor( private agentservice:AgentService,private activeroute:ActivatedRoute, private router:Router){
     
      
    }

details(id:any) {
  console.log(id);
  this.agentservice.agentdetails(id);
  this.router.navigate(['/agent']);


}


 
  
  ngOnInit(): void {
    if(this.router.url.startsWith("/admin")){
      this.admin=true;
    }else if(!this.router.url.startsWith("/admin")){
      this.admin=false;
    }
    this.activeroute.params.subscribe((params)=>{
      if(params.searchterm){
        this.agents=this.agentservice.getAllAgentBySearchspecialite(params.searchterm);
      console.log(this.agentservice.getAllAgentBySearch(params.searchterm));
    }
    else {
    this.agents=this.agentservice.getAllAgents();
  
  
  }

  })
  
  }
}
  


