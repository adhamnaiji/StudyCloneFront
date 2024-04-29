import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService  {
  login:any='';

  constructor() { }
  

   getl(){
  return sessionStorage.getItem('login');
      }

      getout(){
        return sessionStorage.setItem('login','');
            }

  set(data:any){
    this.login=sessionStorage.setItem('login',data);
  }



}
