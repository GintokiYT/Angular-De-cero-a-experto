import { Injectable } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {

  private personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 10000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ];

  get getPersonajes():Personaje[] {
    return [...this.personajes];
  }

  agregarPersonaje( personaje: Personaje) {
    this.personajes.push(personaje);
  }
}
