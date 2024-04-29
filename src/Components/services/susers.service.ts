import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SUser } from '../Shared/SUser';
import { Course } from '../Shared/Models/Course';

@Injectable({
  providedIn: 'root'
})
export class SUsersService {

  private usersUrl: string;

  constructor(private http:HttpClient) {
    this.usersUrl = 'http://localhost:8090/';
  }

  //login
loginUser(thisuser:SUser):Observable<any>{
  return this.http.post(this.usersUrl+"user/login",thisuser);
}

  //mes cours enrolled
  getAllCoursesEnrolled(mail:string):Observable<Course[]>{
  
    return this.http.get<Course[]>(`http://localhost:8090/user/`+mail+`/courses`);
  }
//owner courses
getAllCoursesOwned(id_u:number):Observable<Course[]>{
  
  return this.http.get<Course[]>(`http://localhost:8090/user/owncourses/`+id_u);
}
//
  getUserOwnerOfCourse(id_c:any):Observable<SUser>{
  
     return this.http.get<SUser>(`http://localhost:8090/owner/course/${id_c}`);
  }

}
