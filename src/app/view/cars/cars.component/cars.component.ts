import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { CarsService } from '../../../services/cars.services/cars.service';
import { ClientesComponent } from '../../clientes/clientes.component/clientes.component';

@Component({
  selector: 'app-cars.component',
  imports: [ClientesComponent],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
})
export class CarsComponent {
  cars: any[] = [];

  constructor(private CarsServi: CarsService, private cdr: ChangeDetectorRef){
    this.CarsServi.getCars().subscribe(data =>{
      this.cars = data;
      console.log(this.cars);
      this.cdr.detectChanges();      
    });
}
}