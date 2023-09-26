import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = 'https://localhost:7058/api/User';
  constructor(private http: HttpClient) {}

  getAllUsers(){
    return this.http.get<any>(this.baseUrl);
  }

  deleteUser(userId: number): Observable<void> {
    const url = `${this.baseUrl}/${userId}`;
    return this.http.delete<void>(url);
  }


}
