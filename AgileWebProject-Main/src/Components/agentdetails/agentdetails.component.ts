import { Component, OnInit } from '@angular/core';
import { AgentService } from '../services/agent.service';
import { Router } from '@angular/router';
import { agents_list } from '../../data';
import { SharedService } from '../../app/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agentdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agentdetails.component.html',
  styleUrl: './agentdetails.component.css'
})
export class AgentdetailsComponent implements OnInit {

  curentAg:any;
  userinfo!: any ;
  infou: any;
  tache!:any;

  

  constructor(private agentservice:AgentService,private router:Router,private sharedservice:SharedService){
   this.curentAg= this.agentservice.agentdet;

  }
  ngOnInit(): void {
   
    this.curentAg= this.agentservice.agentdet;

  }

  reserver(curentid:any){
    if(this.curentAg.Availability){
      var date=prompt("donner la date de tache");
      var heured=prompt("donner l'heure  debut");
      var heuref=prompt("donner l'heure  fin");
      var agentid=this.curentAg.id;
      this.userinfo = this.sharedservice.getl();
    this.infou=JSON.parse(this.userinfo);
    this.tache={
      "date":date,
      "heure_debut":heured,
      "heure_fin":heuref,
      "status":"pending",
      "lieu":this.infou.localisation
    }

    this.tache.date=date;
      //var userid=JSON.stringify(this.sharedservice.getl());
      //const ui=JSON.parse(userid);
      //const uif=ui.id;

     // console.log("user info ",this.userinfo,"infou",this.infou.id);


      
      

//console.log("date",date,"heured",heured,"heuref",heuref,"agentid",agentid,"userid",ui);

      console.log(JSON.stringify(this.sharedservice.getl()));
      if(this.sharedservice.getl()){
        alert("you reserved the agent  "+this.curentAg.name+"");
        agents_list.find(agent => {
          if(agent.id === curentid){
  agent.Availability=false;
  console.log("tahce",JSON.stringify(this.tache));
  this.agentservice.addtache(agentid,this.infou.id,this.tache).subscribe(
    response => {
      console.log(response); // Handle response as needed
    },
    error => {
      console.error('Error:', error); // Handle error
    }
  );;

         }
  
        });
      }
      else{
        alert("you should login first");

      }
      
      
      console.log("after changes"+this.curentAg);
 

    }
    else if(!this.curentAg.Availability){
      alert("the user named  "+this.curentAg.name+" is already reserved");

    }

  }

  

}
