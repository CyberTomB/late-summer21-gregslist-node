import { ProxyState } from '../AppState.js'
import Car from '../Models/Car.js'
import { api } from './AxiosService.js'

class CarsService {
  constructor() {
    this.getAllCars()
  }

  async createCar(rawCar) {
    const res = await api.post('cars', rawCar)
    console.log('car created:', res.data)
    ProxyState.cars = [...ProxyState.cars, new Car(rawCar)]
  }

  async getAllCars() {
    try {
      const res = await api.get('cars')
      console.log(res.data)
      ProxyState.cars = res.data.map(c => new Car(c))
    } catch (error) {
      console.error(error)
    }
  }

  async deleteCar(id) {
    try {
      const res = await api.delete('cars/' + id)
      console.log(res.data)
      ProxyState.cars = ProxyState.cars.filter(c => c.id != id)
    } catch (error) {
      console.error("something's wrong with the network", error)
    }
  }
}

// Singleton Only one instance is ever made and the same instance is always exported
export const carsService = new CarsService()
