import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() personaje: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzService: DbzService) {}

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar():void {
    if(this.personaje.nombre.trim().length === 0) return;

    // this.onNuevoPersonaje.emit(this.personaje);
    this.dbzService.agregarPersonaje(this.personaje);


    this.limpiarFormulario();
  }

  limpiarFormulario(): void {
    this.personaje = {
      nombre: '',
      poder: 0
    }
  }

}