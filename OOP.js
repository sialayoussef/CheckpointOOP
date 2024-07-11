// const str = "Achref"
// console.log(typeof(str))
// console.log(str.length)
// const ste = new String('Mahmoud')
// console.log(typeof(ste))
// console.log(ste.length)

// var user = {
//   name :"Achref",
//   age : 25,
//   writeAge : ()=> console.log(`My age is ${user.age}`)
// }

// console.log(user.name)
// user.writeAge()
// user.writeAge = "Youssef"
// console.log(user.writeAge)


// var user1 = {
//   name: "Mahmoud",
//   age: 25,
//   city : "Mhamdia",
//   writeName: () => console.log(`My name is ${user.name}`)
//   }
// user1.writeName()







//  1- L'encapsulation 



/*
L'encapsulation est un concept fondamental en programmation orientée objet (POO). 
Cela fait référence à la capacité de regrouper des données (variables) et des méthodes (fonctions) 
qui agissent sur ces données au sein d'une même unité, appelée classe.
L'objectif principal de l'encapsulation est de cacher les détails internes du fonctionnement d'un objet et de restreindre 
l'accès direct aux certaines variables et méthodes. 
*/

class User {
  constructor(name, age) {
    this._name = name
    this._age = age
  }

  getName=()=> this._name
  setName=(newName)=> this._name = newName

  getAge=()=> this._age
  setAge=(newAge)=> this._age = newAge


}

var person = new User("Mahmoud", 25)

console.log(person.getName())
person.setName("Achref")
console.log(person.getAge())
person.setAge(29)
console.log(person.getAge())




function User(name,age){
  let userName = name
  let userAge = age

  this.getName=()=>userName
  this.setName=(newName)=> userName = newName

  this.getAge=()=>userAge
  this.setAge = (newAge)=>{
    if(newAge>0){
      userAge = newAge
    }
  }

}

var newUser = new User("Mahmoud",5)
console.log(newUser.getName())
newUser.setName("Achref")
console.log(newUser.getName())
newUser.setAge(55)
console.log(newUser.getAge())



function User(name, age, years) {
  let userName = name
  let userAge = age
  let ageAYears = age + years
  let AddYears = years

  this.getAddYears = () => AddYears
  this.setAddYears = (newYears) => {
     AddYears = newYears
     this.setAgeYears(userAge, AddYears)
     }


  this.getName = () => userName
  this.setName = (newName) => userName = newName

  this.getAge = () => userAge
  this.setAge = (newAge) => {
    if (newAge > 0) {
      userAge = newAge     
      this.setAgeYears(newAge, AddYears)
    }
  }

  this.getAgeYears = () => ageAYears
  this.setAgeYears = (a, b) => ageAYears = a + b

}

var newUser = new User("Mahmoud", 5,15)
console.log(newUser.getName())
newUser.setName("Achref")
console.log(newUser.getName())
console.log(newUser.getAge())
console.log(newUser.getAgeYears())
newUser.setAge(50)
console.log(newUser.getAge())
console.log(newUser.getAgeYears())
newUser.setAddYears(50)
console.log(newUser.getAgeYears())



// 2- Heritage

/* 

L'héritage est un principe fondamental de la programmation orientée objet (POO) qui permet à une classe 
(appelée classe dérivée ou sous-classe) de hériter des caractéristiques (attributs et méthodes) d'une autre classe 
(appelée classe de base, classe parente ou superclasse).

*/

class Animal{
  constructor(race,ageRace){
    this._race = race
    this._ageRace = ageRace
  }

  getRace=()=> this._race
  setRace=(newRace)=> this._race = newRace

  getAgeRace = () => this._ageRace
  setAgeRace = (newAgeRace) => this._ageRace = newAgeRace
}

class Dog extends Animal{
  constructor(race , ageRace ,legs){
    super(race, ageRace) 
    this._legs = legs
  }

  getLegs = () => this._legs
  setLegs = (newLegs) => this._legs = newLegs

}

class Bird extends Animal {
  constructor(race, ageRace, bec) {
    super(race, ageRace)
    this._bec = bec
  }

  getBec = () => this._bec
  setBec = (newBec) => this._bec = newBec

}


const newDog = new Dog("Berger",80,7)
console.log(newDog.getRace())
console.log(newDog.getLegs())

const newBird = new Bird("Bardloun", 70, "M3awej")

console.log(newBird.getRace())
console.log(newBird.getBec())


// 3-Polymorfisme

/*
Le polymorphisme est un concept clé de la programmation orientée objet (POO) qui se réfère à la capacité d'objets 
de différentes classes à être traités de manière uniforme lorsqu'ils partagent une même interface ou un même comportement commun, 
tout en permettant à chaque objet de réagir de manière appropriée en fonction de son type spécifique.
*/

class Animal{
  constructor(race,ageRace){
    this._race = race
    this._ageRace = ageRace
  }

  getRace=()=> this._race
  setRace=(newRace)=> this._race = newRace

  getAgeRace = () => this._ageRace
  setAgeRace = (newAgeRace) => this._ageRace = newAgeRace

  sout=()=> console.log("Ya3mel sout")
}

class Dog extends Animal{
  constructor(race , ageRace ,legs){
    super(race, ageRace) 
    this._legs = legs
  }

  getLegs = () => this._legs
  setLegs = (newLegs) => this._legs = newLegs

  sout = () => console.log("Yanba7")

}

class Bird extends Animal {
  constructor(race, ageRace, bec) {
    super(race, ageRace)
    this._bec = bec
  }

  getBec = () => this._bec
  setBec = (newBec) => this._bec = newBec

}


const newDog = new Dog("Berger",80,7)
console.log(newDog.getRace())
console.log(newDog.getLegs())

const newBird = new Bird("Bardloun", 70, "M3awej")

console.log(newBird.getRace())
console.log(newBird.getBec())

newDog.sout()
newBird.sout()

// 4-Prototype

/*
En JavaScript, le terme "prototype" se réfère spécifiquement à un mécanisme interne utilisé pour implémenter l'héritage entre objets.
 Chaque objet JavaScript a un prototype associé, qui est un autre objet à partir duquel il hérite des propriétés. 
 L'objet prototype est comme un modèle à partir duquel d'autres objets peuvent être créés.
  L'héritage en JavaScript est basé sur les relations entre prototypes plutôt que sur les classes comme dans d'autres langages orientés objet.
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.ahla =function(){
  console.log(`Hello ${this.name}`)
}

const newPerson = new Person('Achref',25)

newPerson.ahla()



