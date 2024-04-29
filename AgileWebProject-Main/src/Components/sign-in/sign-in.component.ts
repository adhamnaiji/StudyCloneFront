import { Component, Input, OnInit } from '@angular/core';
import { InputComponent } from '../../ReusableComponents/input/input.component';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AgentService } from '../services/agent.service';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../environments/environments';
import { AppComponent } from '../../app/app.component';
import { SharedService } from '../../app/shared.service';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [InputComponent,RouterModule,ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent  implements OnInit{

  postuserform!: FormGroup;
  constructor(private agentservice:AgentService,
    private fb:FormBuilder,
    private router: Router,
    private sharedservice:SharedService){}



  ngOnInit(): void {
    this.postuserform=this.fb.group({
      email:[null,[Validators.required]],
      mdp:[null,[Validators.required]]
    })
  }

  @Input() type ! :String;
  @Input() placeholder ! :String;
  @Input() id !:String;

  postuser(){
    //console.log(this.postuserform.value);
    this.agentservice.loginUser(this.postuserform.value).subscribe(
      (res: any) => {
        console.log('Response mregule',res);
        //console.log(sessionStorage.getItem('login'));
       // environment.login="true";
       //new AppComponent().login();
       //sessionStorage.setItem('login','hhkhhl');
       //this.agentservice.session='true';
       this.sharedservice.set(JSON.stringify(res));
    this.router.navigate(['/acceuil']);



        

      },
      (error) => {
        console.error('Error occurred:', error.error);
        //itala3 el error
        alert( error.error);
      }
    );
    



    

  }




}
