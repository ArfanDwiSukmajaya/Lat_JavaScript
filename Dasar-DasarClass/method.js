/* Function yang berada didalam sebuah class disebut Method.    

Method bisa dibilang seperti "aksi" milik sebuah instance.

Jika data seperti name dan age dapat ditambahkan menggunakan property, method dapat mengekspresikan seluruh kumpulan instruksi seperti memberikan salam dan menghitung nilai.*/

class Animal {
  constructor(name, umur) {
    this.name = name;
    this.umur = umur;
    console.log(`Nama saya ${name} umur ${umur}`);
  }

  salam() {
    console.log("halo");
  }

  info() {
    console.log(this.name);

    // Memanggil method di dalam method
    this.salam()
  }
}
const animal = new Animal('Arfan', 18)
animal.salam()
animal.info()