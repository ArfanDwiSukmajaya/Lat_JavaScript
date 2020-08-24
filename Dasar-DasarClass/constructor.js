class Animal {
  constructor() {
    console.log("Halo");
  }
}
const animal = new Animal();



// Menambahkan properti dan nilai
class Animal2 {
  constructor() {
    this.name = 'Dwi';
  }
}
const animal2 = new Animal2();
console.log(animal2.name);


// Mengubah nilai untuk semua instance
class Animal3 {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
    console.log(`Nama saya ${nama} umur ${umur}`);
  }
}
const animal3 = new Animal3('Sukmajaya', 17);