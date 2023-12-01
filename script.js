// PRAKTIKA SU JS KLASĖMIS

// 1 UŽDUOTIS

// Naudojant ES5 sintakse sukurkite objekto Filmas (Movie) objekto konstruktoriu, kuris turės šias savybes: name, year, director, budget, income ir pridėkite prototype metodus:
// * getIntroduction(), kuris grąžins filmo pilną pavadinimą (su name, year, director);
// * getProfit(), kuris grąžins sumą, kurią uždirbo (pelną) filmas.
console.log("1 užduotis")
console.log("======================")

function Movie(name, yearM, director, budget, income){
    this.name = name
    this.yearM = yearM
    this.director = director
    this.budget = budget
    this.income = income

    Movie.prototype.getIntroduction = function(){
        console.log(`Filmo pilnas pavadinimas: ${this.name}, ${this.yearM}, ${this.director} `)
    }
    Movie.prototype.getProfit= function(){
        console.log(`Filmas uždirbo: $ ${this.income - this.budget}`)
    
    }
}

const filmas = new Movie("Titanic", 1997, "James Cameron", 200000000, 2196000000)
const filmas1 = new Movie("Steve Jobs", 2015, "Danny Boyle", 30000000, 34400000)

filmas.getIntroduction()
filmas.getProfit()
filmas1.getIntroduction()
filmas1.getProfit()


console.log("======================")

// 2.1 UŽDUOTIS

// Naudojant ES6 klases sukurkite automobilių objektų kūrimo konstruktorių (Car), kuris turės šias savybes: marke, model, year
// ir metodus:

// * getIntroduction(), kuris grąžins pilną pavadinimą (su marke ir model).
// * getAge(), kuris gražins “10 metų arba naujesnis”, jei automobilio amžius yra 10 metų arba naujesnis arba “11 metų arba senesnis”, jei automobilio amžius yra 11 metų arba senesnis (šio metodo logikai naudokite ternary operatorių ir Date() metodą).

console.log("2.1 užduotis")
console.log("======================")

class Car{
    constructor(marke, model, year){
        this.marke = marke
        this.model = model
        this.year = year
    }

    getIntroduction(){
        console.log(`Pilnas mašinos pavadinimas: ${this.marke} ${this.model}`)
    }

    getAge(){
        this.year >= 2013 ? console.log(`10 metų arba naujesnis automobilis`):
        console.log(`11 metų arba senesnis automobilis`)
    }
}

const masina = new Car ("WV:", "Beatle", 1938)
const masina2 = new Car ("Lamborghini:", "Aventador", 2015)

masina.getIntroduction()
masina.getAge()
masina2.getIntroduction()
masina2.getAge()

console.log("======================")

// 2.2 UŽDUOTIS

// Naudojant ES6 subklases sukurkite motociklų objektų kūrimo konstruktorių (Motorcycle), kuris turės visas automobilių objektų kūrimo konstruktorių (Car) savybes ir metodus ir papildomai šią savybę: wheels (kurio vertė bus number) ir metodą. Ir metodą: 

// * getWheelsNumber(), kuris grąžins “motociklas turi tris ratus”, jei wheels vertė bus 3 ir “motociklas turi du ratus”, jei wheels vertė bus 2 (šio metodo logikai naudokite else if operatorių arba switch).

// Testavimui, sukurkite du objektus, kurie turės nurodytas savybes ir metodus.

console.log("2.2 užduotis")
console.log("======================")

class Motorcycle extends Car{
    constructor(marke, model, year, wheels){
        super(marke, model, year, wheels)
    }

    getWheelsNumber(){
        if(this.wheels >= 3){
            console.log(`Motociklas turi tris ratus`)
        } else {
            console.log(`Motociklas turi du ratus`)
        }
    }
}

const motociklas = new Motorcycle ("Čezeta:", "N-Zeta", 1958, 3)
const motociklas2 = new Motorcycle ("Piaggio:", "Vespa", 2014, 2)

motociklas.getIntroduction()
motociklas.getAge()
motociklas.getWheelsNumber()

motociklas2.getIntroduction()
motociklas2.getAge()
motociklas2.getWheelsNumber()

console.log("======================")