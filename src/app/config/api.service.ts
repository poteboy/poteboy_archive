import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public header: HttpHeaders;

  constructor(private http: HttpClient) { 
    this.header = new HttpHeaders().set('Content-Type', 'application/json')
  }
}
