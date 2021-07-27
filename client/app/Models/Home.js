import { generateId } from "../Utils/GenerateId.js"
import Form from "./Form.js"

export default class Home {
   constructor({ bedrooms, bathrooms, levels, price, imgUrl, year, id = generateId() }) {
      this.bedrooms = bedrooms
      this.bathrooms = bathrooms
      this.levels = levels
      this.price = price.toLocaleString("en-US")
      this.imgUrl = imgUrl
      this.id = id
      this.year = year
   }

   get Template() {
      return `
      <div class="card">
            <img src="${this.imgUrl}" class="card-img-top" alt="house image">
            <div class="card-body">
              <div class="text-center">
                  <p><b>${this.bedrooms} Br - ${this.bathrooms} Ba - ${this.levels} Levels</b></p>
              </div>
              <p class="small">Year: ${this.year}</p>
              <p>A nice home for your family. :)</p>
              <p><em>$${this.price}</em></p>
              <div>
              <button class="btn btn-danger btn-block" onclick="app.homesController.deleteHome('${this.id}')">DELETE</button>
              </div>
            </div>
         </div>
      `
   }
}