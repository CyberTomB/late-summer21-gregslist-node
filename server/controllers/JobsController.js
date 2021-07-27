import { jobsService } from '../services/JobsService'

export class JobsController extends BaseController {
  constructor() {
    super('api/jobs')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
      .put('/:id/bid', this.bid)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const jobs = await jobsService.getAll(req.query)
      res.send(jobs)
    } catch (error) {
      next(error)
    }
  }

  getById(arg0, getById) {
    throw new Error('Method not implemented.')
  }

  create(arg0, create) {
    throw new Error('Method not implemented.')
  }

  edit(arg0, edit) {
    throw new Error('Method not implemented.')
  }

  bid(arg0, bid) {
    throw new Error('Method not implemented.')
  }

  destroy(arg0, destroy) {
    throw new Error('Method not implemented.')
  }
}
