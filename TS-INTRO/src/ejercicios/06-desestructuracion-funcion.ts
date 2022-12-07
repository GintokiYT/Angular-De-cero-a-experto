export interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: 'Nokia A1',
  precio: 150
}

const tableta: Producto = {
  desc: 'iPad Air',
  precio: 350
}

export const calculaISV = (productos: Producto[]): [number, number] => {
  let total = 0;
  productos.forEach( ({precio}) => {
    total += precio;
  });
  return [total, total * 0.15];
}

const productos = [
  telefono,
  tableta
]

const [total, isv] = calculaISV(productos);
console.log('Total:', total);
console.log('ISV:', isv);

console.clear();