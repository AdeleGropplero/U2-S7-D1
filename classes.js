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
  sameOwner(ownerToCompare) {
    if (this.ownerName === ownerToCompare.ownerName) {
      return `${this.petName} and ${ownerToCompare.petName} hanno lo stesso padrone: ${this.ownerName}`;
    }
  }
}

const form = document.getElementById("petForm");

const pets = [];

/* let petNames = [];
let ownerNames = [];
let specieses = [];
let breeds = []; */

const addToPetList = function () {
  const ul = document.getElementById("list");
  ul.innerHTML = "";
  pets.forEach((pet, i) => {
    const liItem = document.createElement("li");
    liItem.classList.add("list-group-item", "text-center");
    liItem.innerText = `Name: ${pet.petName} ---- Owner: ${pet.ownerName} ---- Species: ${pet.species} ---- Breed: ${pet.breed}`;
    ul.appendChild(liItem);
  });
};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const myArrays = function () {
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;

    /*  petNames.push(petName);
    ownerNames.push(ownerName);
    specieses.push(species);
    breeds.push(breed); */

    const pet = new Pet(petName, ownerName, species, breed);

    pets.push(pet);
  };
  myArrays();

  form.reset();

  /* console.log(petNames);
  console.log(ownerNames);
  console.log(specieses);
  console.log(breeds); */

  console.log(pets);

  /* verifichiamo se alcuni pet hanno lo stesso padrone */
  for (let i = 0; i < pets.length; i++) {
    for (let j = i + 1; j < pets.length; j++) {
      const Message = pets[i].sameOwner(pets[j]);
      console.log(Message);
    }
  }

  addToPetList();
});
