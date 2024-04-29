import { Component, Input } from '@angular/core';
import { InputComponent } from '../../ReusableComponents/input/input.component';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgentService } from '../services/agent.service';
import { LocationService } from '../../app/services/location/location.service';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [InputComponent,FormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
constructor(private agentservice:AgentService){

}

submitForm(_form: NgForm) {
  birthDate: Date;
  const today = new Date();
  const birthDate = new Date(_form.value.date);
  let age = today.getFullYear() - birthDate.getFullYear();

  let userbody={
    
    
      "nom" :_form.value.nom,
      "prenom":_form.value.prenom ,
       "telephone" :_form.value.phone,
       "email":_form.value.mail ,
       "mdp":_form.value.password,
      "type":"",
       "age":age,
      "localisation":_form.value.adresse ,
      "specialite":_form.value.specialite,
      "disponibilite":true 
    
  }
  this.agentservice.signupUser(userbody).subscribe((res)=>{

   console.log(res);
   this.resetChamps(_form);
   //console.log("tsab mrgl");
  },
  (error) => {
    console.error('Error occurred:', error.error);
    //itala3 el error
    alert( error.error);
  }
)

}

resetChamps(_form: NgForm){
  alert("User Successfully added");
  _form.reset();

}

  @Input() type ! :String;
  @Input() placeholder  :String="";
  @Input() id !:String;

}
