import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarsService } from '../../../services/cars.services/cars.service';
import { CarsModel } from '../../../models/cars.model/cars.model';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
})
export class CarsComponent {
  cars: CarsModel[] = [];

  constructor(private CarsServi: CarsService, private cdr: ChangeDetectorRef){
    this.CarsServi.getCars().subscribe(data =>{
      this.cars = data;
      console.log(this.cars);
      this.cdr.detectChanges();      
    });
  }
}
