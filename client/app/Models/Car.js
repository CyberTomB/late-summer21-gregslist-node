import { generateId } from '../Utils/GenerateId.js'

export default class Car {
  // OBJECT DESCONSCTRUCTION
  // using the {} you can pull only the properties you care about off the incoming object
  // the '=' allows setting default values incase that property was not provided
  constructor({ make, model, year, price, description, imgUrl, id = generateId() }) {
    this.make = make
    this.model = model
    this.year = year
    this.price = price.toLocaleString('en-US')
    this.description = description || 'no car description'
    this.imgUrl = imgUrl || '//placehold.it/200x200'
    this.id = id
  }
  // constructor(data) {
  //   this.make = data.make
  //   this.model = data.model
  //   this.year = data.year
  //   this.price = data.price
  //   this.description = data.description || "no description provided"
  //   this.imgUrl = data.imgUrl
  // }

  get Template() {
    return `
    <div class="card">
          <img src="${this.imgUrl}" class="card-img-top" alt="${this.make} ${this.model} car image">
          <div class="card-body">
              <div class="text-center">
                  <p><b>${this.year} - ${this.make} - ${this.model}</b></p>
              </div>
              <p>${this.description}</p>
              <p><em>$${this.price}</em></p>
              <div>
              <button class="btn btn-danger btn-block" onclick="app.carsController.deleteCar('${this.id}')">DELETE</button>
              </div>
          </div>
      </div>
    `
  }
}
