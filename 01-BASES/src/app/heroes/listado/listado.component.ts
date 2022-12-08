import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  public heroes:string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];

  public heroeBorrado:string = '';

  public borrarHeroe(): void {
    if(this.heroes.length > 0) {
      this.heroeBorrado = this.heroes.at(-1) || '';
      this.heroes.pop();
    }
  }
}
