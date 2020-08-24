/*
  Bila method dengan nama yang sama seperti method dalam class induk didefinisikan dalam class anak, maka method class anak yang akan digunakan. Ini karena method class anak menimpa method class induk, hal ini disebut overriding.
*/

/*
  
Constructor dapat ditimpa dengan cara yang sama seperti method. Misalnya, Anda ingin menambahkan property ke class anak. Untuk melakukan overriding constructor, Anda harus menambahkan super() dibaris pertama constructor penimpa. Mari kita pelajari hal ini lebih lanjut dalam slide berikutnya.
 */

/*
 
Code super() dalam constructor class anak akan memanggil constructor class induk. Karena itu, kita harus memberikan argument di antara () milik super(), sehingga constructor class induk dapat menerima argument tersebut. Sekarang, setelah memanggil constructor class milik induk, property breed akan ditambahkan.
 */


class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Halo");
  }

  info() {
    this.greet();
    console.log(`Nama saya adalah ${this.name}`);
    console.log(`Saya berusia ${this.age} tahun`);
  }
}

class Dog extends Animal {
  // Tambahkan constructor
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }


  info() {
    this.greet();
    console.log(`Nama saya adalah ${this.name}`);
    // Print 「Saya adalah seekor ____」
    console.log(`Saya adalah seekor ${this.breed}`);

    console.log(`Saya berusia ${this.age} tahun`);
    const humanAge = this.getHumanAge();
    console.log(`Saya berusia ${humanAge} tahun dalam umur manusia`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

// Tetapkan "Chihuahua" sebagai nilai argument
const dog = new Dog("Leo", 4, "Chihuahua");
dog.info();