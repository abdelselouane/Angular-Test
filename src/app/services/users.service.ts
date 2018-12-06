import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private  httpClient:  HttpClient) { }

  API_URL = 'http://localhost:8000';

  getUsers(): Observable<any>{
    return this.httpClient.get(`${this.API_URL}/api/users`);
  }

  createUser(body): Observable<any> {
    const data = JSON.stringify(body);
    return this.httpClient.post(`${ this.API_URL }/api/user`, data, httpOptions)
  }

  updateUser(body): Observable<any> {
    const data = JSON.stringify(body);
    return this.httpClient.put(`${ this.API_URL }/api/user/${body.id}`, data, httpOptions)
  }

  deleteUser(id): Observable<any> {
    return this.httpClient.delete(`${ this.API_URL }/api/user/${id}`, httpOptions)
  }

}
