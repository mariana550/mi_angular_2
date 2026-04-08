import { ChangeDetectorRef, Component } from '@angular/core';
import { ClientesService } from '../../../services/clientes.services/clientes.service';
import { RouterLink } from '@angular/router';
import { ClienteModel } from '../../../models/clientes.model/cliente.model';

@Component({
  selector: 'app-clientes',
  standalone: true, 
  imports: [RouterLink],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css',
})
export class ClientesComponent {
  /* clientes: any[] = []; */
  clientes: ClienteModel[] = [];

  constructor(private ClienteServi: ClientesService, private cdr: ChangeDetectorRef){
    this.ClienteServi.getClientes().subscribe(data =>{
      this.clientes = data;
      console.log(this.clientes);
      this.cdr.detectChanges();
    });
  }
} 
