import { Component } from '@angular/core';
import { AgentService } from '../services/agent.service';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { user } from '../../app/user';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { ButtonComponent } from '../../ReusableComponents/button/button.component';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [RouterOutlet,RouterModule,CommonModule,SearchComponent,ButtonComponent],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css'
})
export class PatientsComponent {
admin: boolean=false;

delete(id: number):void {
    this.agentService.deleteUserById(id).subscribe(
      response => {
        console.log(response); 
        this.agentService.getAllusers().subscribe(
          (users: user[]) => {
            this.users = users;
          },
          (error) => {
            console.error('Error fetching users:', error);
          }
        );

      },
      error => {
        console.error('Error:', error); 
      }
    );
console.log(this.agentService.deleteUserById(id));
}

  users: user[] = [];
valueS="Search Users by Name";

  constructor(private agentService: AgentService, private route: ActivatedRoute,private router:Router) {

  }

  ngOnInit(): void {
    if(this.router.url.startsWith("/admin")){
      this.admin=true;
    }else if(!this.router.url.startsWith("/admin")){
      this.admin=false;
    }
    this.route.params.subscribe(params => {
      const searchterm = params['searchterm'];
      if (searchterm) {
        this.agentService.getAllUsersBySearch(searchterm).subscribe(
          (users: user[]) => {
            this.users = users;
          },
          (error) => {
            console.error('Error fetching users:', error);
          }
        );
      } else {
        this.agentService.getAllusers().subscribe(
          (users: user[]) => {
            this.users = users;
          },
          (error) => {
            console.error('Error fetching users:', error);
          }
        );
      }
    });
  }
  }


