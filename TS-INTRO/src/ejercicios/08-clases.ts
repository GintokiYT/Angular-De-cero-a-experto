class PersonaNormal {
  constructor(
    public nombre: string,
    public direccion: string
  ){}
}

class Heroe extends PersonaNormal {
  constructor(
    public alterEgo: string,
    public edad: number
  ){
    super('Tony', 'New Your, USA');
  }
}

const ironman = new Heroe('Ironman', 45);

console.log(ironman);