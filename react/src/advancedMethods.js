import {emojis} from './emojis.js'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`Original array: ${numbers}`)

//MAP = Return new array altering the original array
const doubleNumbers = numbers.map(number => number * 2)
console.log(`Mapped array: ${doubleNumbers}`)

//FILTER = Return new array where elements are true
const evenNumbers = numbers.filter(number => number % 2 == 0)
console.log(`Filtered array: ${evenNumbers}`)

//REDUCE = Return new array with accumulated value
const sumNumbers = numbers.reduce((accumulator, index) => accumulator += index)
console.log(`Accumulated array: ${sumNumbers}`)

//FIND = Find first item that is true
console.log(`Found first item: ${numbers.find(number => number > 4)}`)

//FINDINDEX = Find first index that is true
console.log(`Found first index: ${numbers.findIndex(number => number > 4)}`)

const getDesc = emojis.filter(emoji => emoji.id == 1)
console.log(getDesc[0].name)