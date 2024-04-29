import { Injectable } from '@angular/core';
import { Agent } from '../Shared/Models/Agent';
import { agents_list } from '../../data';
import { HttpClient } from '@angular/common/http';
import { user } from '../../app/user';
import { Observable, map } from 'rxjs';
import { Task } from '../../app/Task';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  agentdet:any;


  private usersUrl: string;

  constructor(private http:HttpClient) {
    this.usersUrl = 'http://localhost:8090/users';
  }


  agentdetails(currentagent:any){
    this.agentdet=currentagent;
    return this.agentdet;
  }
  public findAll(): Observable<user[]> {
    return this.http.get<user[]>(this.usersUrl);
  }


  users!:any;
//agents
  getAllAgents():Agent[]{
    return agents_list;
  }

  getAllAgentBySearch(searchterm:string){
    return this.getAllAgents().filter(agent => agent.name.toLowerCase().includes(searchterm.toLowerCase()));
  }

  getAllAgentBySearchspecialite(searchterm:string){
    return this.getAllAgents().filter(agent => agent.specialite.toLowerCase().includes(searchterm.toLowerCase()));
  }


//users

  getAllusers():Observable<user[]>{
     return this.http.get<user[]>("http://localhost:8090/users");
  }

  getAllUsersBySearch(searchterm: string): Observable<user[]> {
    return this.getAllusers().pipe(
      map(users => users.filter(user => user.nom.toLowerCase().includes(searchterm.toLowerCase())))
    );
  }
  private apiUrl = 'http://localhost:8090/reset-password';
  private baseurl = 'http://localhost:8090';

    //const url = `http://localhost:8090/reset-password/${mail}`;
    resetPassword(email: string): Observable<string> {
      const url = `${this.apiUrl}/${email}`;
      return this.http.post<string>(url, {}).pipe(
        map(response => {
          // Assuming the response is a string, you can return it directly
          console.log("res",response);
          return response;
        })
      );
    }
  


loginUser(thisuser:any):Observable<any>{
  return this.http.post("http://localhost:8090/login",thisuser);
}


signupUser(thisformuser:any):Observable<any>{
  return this.http.post("http://localhost:8090/signup",thisformuser);

}

deleteUserById(id:number): Observable<string>{
  const url = `${this.baseurl}/delete/${id}`;
  return this.http.delete<string>(url).pipe(
    map(response => {
      console.log("res",response);
      return response;
    })
  );
}


addtache(userid:any,employeid:any,tache:any): Observable<any>{
  const url2 = `${this.baseurl}/tache?userId=${userid}&employeId=${employeid}`;
  console.log("url2",url2);
  return this.http.post<any>(url2,tache).pipe(
    map(response => {
      console.log("res",response);
      //return response;
    })
  );;

}


gettaches(id:any):Observable<Task[]>{
  
  return this.http.get<Task[]>(`http://localhost:8090/tachebyemp?id=${id}`);
}
  
gettAllaches():Observable<Task[]>{
  
  return this.http.get<Task[]>(`http://localhost:8090/taches`);
}


deletetachbyid(id:any):Observable<string>{
  
  return this.http.delete<string>(`http://localhost:8090/deletetache/${id}`);
}

}
