import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

// FIXME Step 2: set up a place to store our data

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  // NOTE this does denote what is stored in this collection, but it also gives us intellisense in our code
  /** @type {import('./Models/Car').Car[]} */
  cars = loadState('cars', [Car])
  /** @type {import('./Models/Car').Car|null} */
  activeCar = null

  homes = [
    new House({
      bedrooms: 3,
      bathrooms: 2.5,
      squareFoot: 12122,
      address: '1111 N. This Rd.',
      imageURL: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg',
      price: 200000
    }),
    new House({
      bedrooms: 0,
      bathrooms: 1,
      squareFoot: 50,
      address: '2020 E. Toilet Ln.',
      imageURL: 'https://cottagelife.com/wp-content/uploads/2014/07/shutterstock_93840280-copy-e1406580203437.jpg',
      price: '40 chickens'
    })
  ]
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
