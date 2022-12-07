const queTipoSoy = <T>(argumento: T) => {
  return argumento;
}

let soyString = queTipoSoy('Hola mundo');
console.log(soyString);

let soyNumber = queTipoSoy(100);
console.log(soyNumber);

let soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8,9]);
console.log(soyArreglo);

let soyExplicito = queTipoSoy<string>('Hola mundo');