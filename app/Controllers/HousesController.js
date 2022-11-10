import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js"
import { getFormData } from "../Utils/FormHandler.js"



function _drawHomes() {
  let template = ''
  appState.homes.forEach(h => template += h.HomeTemplate)
  console.log('homes');
  setHTML('house-listings', template)
  setHTML('houses-form', House.GetHouseFormTemplate())
}






export class HousesController {

  constructor() {

    _drawHomes()
    appState.on('homes', _drawHomes)

  }

  createHouse() {
    window.event.preventDefault()
    let form = window.event.target
    let formData = getFormData(form)
    housesService.createHouse(formData)
  }

  async deleteHouse(houseId) {
    if (await Pop.confirm('Delete house??')) {
      housesService.deleteHouse(houseId)
    }
  }




}
