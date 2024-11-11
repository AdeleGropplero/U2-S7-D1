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
