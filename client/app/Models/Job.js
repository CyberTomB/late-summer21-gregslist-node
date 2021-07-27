import { generateId } from "../Utils/GenerateId.js"

export default class Job {
   constructor({ company, jobTitle, hours, rate = 7.25, description, id = generateId() }) {
      this.title = jobTitle
      this.description = description
      this.pay = rate.toLocaleString("en-US", { style: "currency", currency: "USD" })
      this.hours = hours
      this.company = company
      this.id = id
   }

   get Template() {
      return `
      <div class="card">
      <div class="card-body">
         <div class="card-title text-center">
         <p><b>${this.title}</b><p>
         </div>
               <p class="small">${this.company}</p>
               <p>${this.description}</p>
               <p><em>${this.pay} per hour, ${this.hours} hours a week</em></p>
               <button class="btn btn-danger btn-block" onclick="app.jobsController.deleteJob('${this.id}')">DELETE</button>
         </div>
      </div>
      `
   }
}