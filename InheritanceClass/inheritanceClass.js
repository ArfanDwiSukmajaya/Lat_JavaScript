class Animal {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  salam() {
    console.log("Halo");
  }

  info() {
    this.salam()
    console.log(`Nama saya ${this.nama} umue ${this.umur}`);
  }

}
const animal = new Animal("Kucing", 8);
animal.info();

/*
Inheritance adalah cara membuat class baru berdasarkan class yang sudah ada. Misalnya, bila class Dog diwariskan dari class Animal, class Dog juga akan memiliki semua method yang didefinisikan dalam class Animal.
*/
class Dog extends Animal {

  getHumanAge() {
    return this.umur * 7;
  }

}
const dog = new Dog('Tikus', 1)
dog.info()
const humanAge = dog.getHumanAge();
console.log(`Umur dalam tahun manusia adalah ${humanAge}`);