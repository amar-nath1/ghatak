import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http:HttpClient) {



   }

   fetchAllProfiles(){
    
   }

   postProfile(profile:any){
  
    const payload = JSON.stringify(profile)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    return this.http.post('http://localhost:3000/api/users',payload,{headers}).subscribe((res)=>{
      console.log(res,' backseres')
    })
   }
}
