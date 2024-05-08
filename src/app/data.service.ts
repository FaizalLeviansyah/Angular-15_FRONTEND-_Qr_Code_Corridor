import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'  // This service is provided at the root level
})
export class DataService {
 private dataUrl = 'http://localhost:5000/data';  // The URL to the backend endpoint

    constructor(private http: HttpClient) {}        // Inject HttpClient to make HTTP requests 

    getData(): Observable<any[]> {
 return this.http.get<any[]>(this.dataUrl);    // Fetch data from the backend
 }
}