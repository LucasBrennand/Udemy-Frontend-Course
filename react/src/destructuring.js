
const animals = [
    {name: "Dog", sound: "Bark"},
    {name: "Cat", sound: "Meow"},
    {name: "Bird", sound: "Piu"}
]

const people = {
    name: "Lucas",
    age: 23,
    height: 1.84
}

const {name: nameLucas} = people
console.log(nameLucas)
const [dog] = animals
console.log(dog)