import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarModel } from './car';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  private apiUrl = 'http://localhost:3000/cars';
  urlBasket: string = 'http://localhost:3000/basket';


  constructor(private http: HttpClient) { }

  getCars(): Observable<CarModel[]> {
    return this.http.get<CarModel[]>(this.apiUrl);
  }

  getCar(id: number){
    return this.http.get<CarModel>(this.apiUrl + '/' + id);
  }
  postCar(car: CarModel): Observable<CarModel> {
    return this.http.post<CarModel>(this.apiUrl, car);
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateCar(car: CarModel): Observable<CarModel> {
    return this.http.put<CarModel>(`${this.apiUrl}/${car.id}`, car);
  }

}


