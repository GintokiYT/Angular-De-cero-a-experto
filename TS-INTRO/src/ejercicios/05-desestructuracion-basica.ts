interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: 'Mess',
  detalles: {
    autor: 'Ed Sheeran',
    anio: 2015
  }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor: autorDetalles } = detalles;

console.log('El volumen actual es: ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('La canción actual es: ', cancion);
console.log('El autor es: ', autorDetalles);

console.clear();

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks', 'Gohan'];

const [ , , , p4 ] = dbz;

console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 2: ', dbz[2]);
console.log('Personaje 3: ', dbz[3]);
console.log('Personaje 4: ', p4);