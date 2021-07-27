import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class HomesService {
  async getAll(query = {}) {
    const homes = await dbContext.Homes.find(query)
    return homes
  }

  async getById(id) {
    const home = await dbContext.Homes.findById(id)
    if (!home) {
      throw new BadRequest('Invalid ID')
    }
    return home
  }

  async create(body) {
    const home = await dbContext.Homes.create(body)
    return home
  }

  async edit(body) {
    const home = await dbContext.Homes.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    if (!home) {
      throw new BadRequest('Invalid ID')
    }
    return home
  }

  async destroy(id) {
    const home = await dbContext.Homes.findByIdAndDelete(id)
    if (!home) {
      throw new BadRequest('Invalid ID')
    }
    return home
  }
}

export const homesService = new HomesService()
