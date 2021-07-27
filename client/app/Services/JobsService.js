import { ProxyState } from '../AppState.js'
import Job from '../Models/Job.js'
import { api } from './AxiosService.js'

class JobsService {
  constructor() {
    this.getAllJobs()
  }

  async createJob(rawJob) {
    const res = await api.post('jobs', rawJob)
    console.log('here is ur job:', res.data)
    ProxyState.jobs = [...ProxyState.jobs, new Job(res.data)]
  }

  async getAllJobs() {
    try {
      const res = await api.get('jobs')
      console.log(res.data)
      ProxyState.jobs = res.data.map(j => new Job(j))
    } catch (error) {
      console.error(error)
    }
  }

  async deleteJob(id) {
    try {
      const res = await api.delete('jobs/' + id)
      console.log(res.data)
      ProxyState.jobs = ProxyState.jobs.filter(j => j.id != id)
    } catch (error) {
      console.error('Network problem: ', error)
    }
  }
}

export const jobsService = new JobsService()
