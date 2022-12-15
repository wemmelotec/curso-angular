import { Injectable } from '@angular/core';
import { Animal } from 'src/app/Aminal';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  
  private apiUrl = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) {}

  //faz a exclusão no backend
  remove(id: Number) {
    return this.http.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getItem(id: Number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`);
  }
}
