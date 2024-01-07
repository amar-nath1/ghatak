import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  constructor(private http: HttpClient) {}

  fetchAllProfiles() {
    return this.http.get('../../../../assets/customers.json').pipe(
      map((res) => {
        return res;
      })
    );
  }

  postProfile(profile: any) {
    const payload = JSON.stringify(profile);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http
      .post('http://localhost:3000/api/users', payload, { headers })
      .subscribe((res) => {
        console.log(res, ' backseres');
      });
  }
}
