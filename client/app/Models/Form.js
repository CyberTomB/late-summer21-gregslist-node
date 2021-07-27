export default class Form {
   constructor({ name, type, placeholder = name, required = true, min = 1, max = 1000 }) {
      this.name = name
      this.type = type
      this.placeholder = placeholder
      this.required = required
      this.min = min
      this.max = max
   }

   get formGroupTemplate() {
      return `
      <div class="form-group">
         <label for="${this.name}">${this.name.toUpperCase()}</label>
         <input type="text" name="${this.name}" id="${this.name}" class="form-control" placeholder="${this.name}..." required>
      </div>
      `
   }

   get Template() {

   }
}