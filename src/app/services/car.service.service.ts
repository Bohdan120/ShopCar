import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarModel } from './car';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  private apiUrl = 'assets/cars.json';

  constructor(private http: HttpClient) { }

  getCars(): Observable<CarModel[]> {
    return this.http.get<CarModel[]>(this.apiUrl);
  }
}
