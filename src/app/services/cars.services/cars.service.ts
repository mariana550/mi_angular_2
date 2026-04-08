import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarsModel } from '../../models/cars.model/cars.model';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  
  constructor(private http: HttpClient){

  }
  getCars(){
    return this.http.get<CarsModel[]>('cars.json'); 
  }
}
