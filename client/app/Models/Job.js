import { generateId } from '../Utils/GenerateId.js'

export default class Job {
  constructor({ company, title, hours, pay = 7.25, description, id = generateId() }) {
    this.title = title
    this.description = description
    this.pay = pay
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
               <p><em>${this.pay.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} per hour, ${this.hours} hours a week</em></p>
               <button class="btn btn-danger btn-block" onclick="app.jobsController.deleteJob('${this.id}')">DELETE</button>
         </div>
      </div>
      `
  }
}
