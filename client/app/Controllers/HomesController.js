import { ProxyState } from '../AppState.js'
import { homesService } from '../Services/HomesService.js'

function _draw() {
  let template = ''
  ProxyState.homes.forEach(home => {
    template += home.Template
  })
  document.getElementById('homes').innerHTML = template
}

export default class HomesController {
  constructor() {
    ProxyState.on('homes', _draw)
    _draw()
  }

  createHome() {
    event.preventDefault()
    const form = event.target
    const rawHome = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      levels: parseInt(form.levels.value),
      price: parseInt(form.price.value),
      year: form.year.value,
      imgUrl: form.imgUrl.value || 'https://via.placeholder.com/200'
    }
    homesService.createHome(rawHome)
    form.reset()
  }

  deleteHome(id) {
    console.log('you are trying to delete home: ', id)
    try { homesService.deleteHome(id) } catch (error) {
      console.log("delete didn't work: ", error)
    }
  }
}
