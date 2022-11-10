import { generateId } from "../Utils/generateId.js"


export class House {
  constructor(data) {
    this.id = generateId()
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.squareFoot = data.squareFoot
    this.address = data.address
    this.date = new Date
    this.imageURL = data.imageURL
    this.price = data.price
  }

  get HomeTemplate() {
    return `
    <div class="col-3">
  <div class="card bg-success ">
    <img src="${this.imageURL}"
        alt="">
    <h2 class="text-danger">$ ${this.price}</h2>
    <h3>${this.squareFoot}sqft</h3>
    <h4>${this.bedrooms}bed ${this.bathrooms}bath</h4>
    <h4 class="d-flex justify-content-between" >date <i title="delete house" onclick="app.housesController.deleteHouse('${this.id}')" class="me-2 btn btn-info btn-danger mdi mdi-delete" ></i>
    </h4>
  </div>
  </div>`
  }

  GetHouseFormTemplate() {
    return `
    <div class="col-6 m-auto">
        <form onsubmit="app.housesController.createHouse()">
          <div class="form-group">
            <label for="formGroupExampleInput">Price</label>
            <input type="number" class="form-control" id="house-price" placeholder="Price" name="price">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">square foot</label>
            <input type="number" class="form-control" id="house-squareFoot" placeholder="square foot" name="squareFoot">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">bedroom</label>
            <input type="number" class="form-control" id="house-bedrooms" placeholder="bedroom" name="bedrooms">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">bathroom</label>
            <input type="number" class="form-control" id="house-bathrooms" placeholder="bathroom" name="bathrooms">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">address</label>
            <input type="text" class="form-control" id="house-address" placeholder="address" name="address">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">image</label>
            <input type="text" class="form-control" id="house-imageURL" placeholder="image" name="imgURL">
          </div>
          <div class="d-flex text-center justify-content-center">
            <button class=" btn btn-success rounded">submit</button>
          </div>
        </form>
      </div>
    `
  }






}