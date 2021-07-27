import { homesService } from '../services/HomesService'
import BaseController from '../utils/BaseController'

export class HomesController extends BaseController {
  constructor() {
    super('api/homes')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const homes = await homesService.getAll(req.query)
      res.send(homes)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const home = await homesService.getById(req.params.id)
      res.send(home)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const home = await homesService.create(req.body)
      res.send(home)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.id = req.params.id
      delete req.body.price
      const home = await homesService.edit(req.body)
      res.send(home)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      await homesService.destroy(req.params.id)
      res.send({ message: 'Successfully Annihilated Home' })
    } catch (error) {
      next(error)
    }
  }
}
