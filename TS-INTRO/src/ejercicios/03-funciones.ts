function sumar(a:number, b:number): number {
  return a + b;
}

const resultado = sumar(10, 20);
console.log(resultado);

const sumarFlecha = (a:number, b:number): number => {
  return a + b;
}

const resultadoFlecha= sumarFlecha(10, 30);
console.log(resultadoFlecha);

const multiplicar = (numero: number, otroNumero: number, base:number = 2) => {
  return numero * base;
}

const resultadoMultiplicar = multiplicar(10, 20);
console.log(resultadoMultiplicar);


console.clear();


interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHP: () => void;
}

const curar = (personaje: PersonajeLOR, curarX: number): void => {
  personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
  nombre: 'Strider',
  pv: 50,
  mostrarHP() {
    console.log('Puntos de vida', this.pv);
  }
}

curar(nuevoPersonaje, 50);

nuevoPersonaje.mostrarHP();