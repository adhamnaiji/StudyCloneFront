import { Component, Input } from '@angular/core';
import { InputComponent } from '../../ReusableComponents/input/input.component';
import { FormsModule, NgModel, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { AgentService } from '../services/agent.service';
@Component({
  selector: 'app-reset-paswword',
  standalone: true,
  imports: [InputComponent,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './reset-paswword.component.html',
  styleUrl: './reset-paswword.component.css'
})
export class ResetPaswwordComponent {
  constructor(private agentservice:AgentService){

  }
  model: { email: string } = { email: '' };


RecoverPassword(email:string) : void {
    this.agentservice.resetPassword(email).subscribe(
      (response) => {
        console.log('Password reset request sent successfully:', response);
        // Handle success response here
      },
      (error) => {
        console.error('Error occurred while sending password reset request:', error);
        // Handle error response here
      }
    );
  }


  @Input() type ! :String;
  @Input() placeholder ! :String;
  @Input() id !:String;

}
