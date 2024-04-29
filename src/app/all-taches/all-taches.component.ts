import { Component, OnInit } from '@angular/core';
import { AgentService } from '../../Components/services/agent.service';
import { SharedService } from '../shared.service';
import { Task } from '../Task';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ReusableComponents/button/button.component';

@Component({
  selector: 'app-all-taches',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './all-taches.component.html',
  styleUrl: './all-taches.component.css'
})
export class AllTachesComponent  implements OnInit{
  taches: Task[] = [];

  constructor(private agentservice: AgentService) { }

  ngOnInit(): void {
    this.agentservice.gettAllaches().subscribe(
      (tasks: Task[]) => {
        this.taches = tasks; // Assign the tasks received from the service to the local variable
        console.log(this.taches); // Log the tasks to the console for verification
      },
      (error) => {
        console.error('Error fetching tasks:', error); // Handle any errors that occur during the HTTP request
      }
    );
  }
  


deletetache(arg0: any) {
console.log("delete tache with the id ",arg0);
this.agentservice.deletetachbyid(arg0).subscribe(
  response => {
    console.log(response); 
    this.agentservice.gettAllaches().subscribe(
      (tasks) => {
        this.taches = tasks; // Assign the tasks received from the service to the local variable
        console.log(this.taches); // Log the tasks to the console for verification
      },
      (error) => {
        console.error('Error fetching tasks:', error); // Handle any errors that occur during the HTTP request
      }
    );

  },
  error => {
    console.error('Error:', error); 
  }
);

}
 

}
