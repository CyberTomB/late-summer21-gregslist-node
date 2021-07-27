import { dbContext } from '../db/DbContext'

class JobsService {
  async getAll(query = {}) {
    const jobs = await dbContext.Jobs.find(query)
    return jobs
  }
}

export const jobsService = new JobsService()
