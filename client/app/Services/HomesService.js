import { ProxyState } from '../AppState.js'
import Home from '../Models/Home.js'
import { api } from './AxiosService.js'

class HomesService {
  constructor() {
    this.getAllHomes()
  }

  async createHome(rawHome) {
    const res = await api.post('homes', rawHome)
    console.log('here is ur house:', res.data)
    ProxyState.homes = [...ProxyState.homes, new Home(res.data)]
  }

  async getAllHomes() {
    try {
      const res = await api.get('homes')
      console.log(res.data)
      ProxyState.homes = res.data.map(h => new Home(h))
    } catch (error) {
      console.error(error)
    }
  }

  async deleteHome(id) {
    try {
      const res = await api.delete('homes/' + id)
      console.log(res.data)
      ProxyState.homes = ProxyState.homes.filter(h => h.id != id)
    } catch (error) {
      console.error('Network problem:', error)
    }
  }
}

export const homesService = new HomesService()
