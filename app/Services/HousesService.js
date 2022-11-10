import { appState } from "../AppState.js"
import { HousesController } from "../Controllers/HousesController.js"
import { House } from "../Models/House.js"



class HousesService {

  deleteHouse(houseId) {
    let filteredArray = appState.homes.filter(h => h.id !== houseId)
    appState.homes = filteredArray
  }


  createHouse(formData) {
    console.log('making house')
    let newHouse = new House(formData)
    appState.homes = [...appState.homes, newHouse]
  }




}











export const housesService = new HousesService