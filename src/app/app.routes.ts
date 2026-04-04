import { Routes } from '@angular/router';
import { CarsComponent } from './view/cars/cars.component/cars.component';
import { ClientesComponent } from './view/clientes/clientes.component/clientes.component';

export const routes: Routes = [
    {path: '', component:CarsComponent},
    {path: 'clientes', component:ClientesComponent},
    {path: 'cars', component:CarsComponent},
];
