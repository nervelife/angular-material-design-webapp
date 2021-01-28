import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SomaService {

  constructor(private http: HttpClient) { }

  getWelcomeMessage(): Observable<string> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get('http://localhost:8080/rest/welcome', { headers, responseType: 'text'});
  }
}
