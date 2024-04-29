import { Component } from '@angular/core';
import { Course } from '../Shared/Models/Course';
import { SUsersService } from '../services/susers.service';
import { SharedService } from '../../app/shared.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ReusableComponents/button/button.component';
import { SUser } from '../Shared/SUser';

@Component({
  selector: 'app-mes-cours',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './mes-cours.component.html',
  styleUrl: './mes-cours.component.css'
})
export class MesCoursComponent {
  userinfo:any;
  infou:SUser;
  EnroledCourses: Course[] = [];
OwnCourses: Course[] = [];

  constructor(private userService:SUsersService,private sharedservice:SharedService ){
    this.userinfo = this.sharedservice.getl();
    this.infou=JSON.parse(this.userinfo);

  }


  ngOnInit(): void {
    //el own courses
  //for(let course of this.infou.ownCourses){
      //console.log(course);

      /*
      this.userService.getAllCoursesOwned(this.infou.id).subscribe((res)=>{
        console.log("el res "+ JSON.parse(res));

        //course.user=res;
        //console.log("el user mte3 el cours"+course.id_c+"is"+course.user.id);
       // this.OwnCourses.push(course);

        
       },
       (error) => {
         console.error('Error occurred:', error.error);
         //itala3 el error
         alert( error.error);
       }
     )*/
console.log("voici el owned courses :");
     for(let c of this.infou.owncourses){
      this.OwnCourses.push(c);
      console.log("own courses"+c.title);
     }

     console.log("voici el enroled courses :");
    
    
//el courses enrolled
     for(let course of this.infou.courses){
      //njib el owner mte3 el course esse3e
      this.userService.getUserOwnerOfCourse(course.id_c).subscribe((res)=>{
        
        //console.log("el course id"+course.id_c);
        //course.user=res;
        console.log("el owner mte3 el cours"+course.id_c+"is"+res.email);
        course.user=res;
        this.EnroledCourses.push(course);

        
       },
       (error) => {
         console.error('Error occurred:', error.error);
         //itala3 el error
         alert( error.error);
       }
     )
      //
      //this.EnroledCourses.push(course);
      //console.log(course.id_c);
    }


    console.log("voici el own courses of mine:");

      

      /*this.userService.getAllCoursesEnrolled(this.infou.email).subscribe((res)=>{
        
        console.log("el course id"+course.id_c);
        //course.user=res;
        console.log("el owner mte3 el cours"+course.id_c+"is"+res);
        this.EnroledCourses.push(course);

        
       },
       (error) => {
         console.error('Error occurred:', error.error);
         //itala3 el error
         alert( error.error);
       }
     )*/
    }
   /* this.userinfo.courses.forEach((course: Course) => {
      this.EnroledCourses.push(course);
      console.log(course.description);
    })*/
  }
  

