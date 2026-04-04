import { ChangeDetectorRef, Component } from '@angular/core';
import { ClientesService } from '../../../services/clientes.services/clientes.service';

@Component({
  selector: 'app-clientes.component',
  imports: [],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
})
export class ClientesComponent {
  clientes: any[] = [];

  constructor(private CarsServi: ClientesService, private cdr: ChangeDetectorRef){
    this.CarsServi.getClientes().subscribe(data =>{
      this.clientes = data;
      console.log(this.clientes);
      this.cdr.detectChanges();
    });
}
}

