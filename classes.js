class User {
  constructor(name, surname, age, location) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.location = location;
  }
  compareAge(personToCompare) {
    if (this.age >= personToCompare.age) {
      return console.log(
        `${this.firstName} ha ${this.age} anni ed è più vecchio di ${personToCompare.firstName} che ha ${personToCompare.age} anni`
      );
    } else {
      return console.log(
        `${personToCompare.firstName} ha ${personToCompare.age} anni ed è più anziano di ${this.firstName} che ha ${this.age} anni`
      );
    }
  }
}

const adele = new User("Adele", "Gropplero", 26, "Roma");
console.log(adele);

const chiara = new User("Chiara", "Mozzarella", 24, "Milano");
console.log(chiara);

const mamma = new User("Fiorella", "Ferrara", 56, "Milano");
console.log(mamma);

adele.compareAge(chiara);
adele.compareAge(mamma);

/* Esercizio 2 */

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
}

const form = document.getElementById("petForm");

/* const pets = [] */

let petNames = [];
let ownerNames = [];
let specieses = [];
let breeds = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const myArrays = function () {
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;

    petNames.push(petName);
    ownerNames.push(ownerName);
    specieses.push(species);
    breeds.push(breed);
  };
  myArrays();
  alert("Dati salvati temporaneamente");

  form.reset();

  console.log(petNames);
  console.log(ownerNames);
  console.log(specieses);
  console.log(breeds);
});
