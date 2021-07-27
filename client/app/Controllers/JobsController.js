import { ProxyState } from '../AppState.js'
import { jobsService } from '../Services/JobsService.js'
import Job from '../Models/Job.js'

function _draw() {
  let template = ''
  ProxyState.jobs.forEach(job => {
    template += job.Template
  })
  document.getElementById('jobs').innerHTML = template
}

export default class JobsController {
  constructor() {
    ProxyState.on('jobs', _draw)
    _draw()
  }

  createJob() {
    event.preventDefault()
    const form = event.target
    const rawJob = {
      title: form.title.value,
      description: form.description.value,
      rate: parseInt(form.pay.value),
      hours: form.payType.value,
      company: form.company.value
    }
    jobsService.createJob(new Job(rawJob))
    form.reset()
  }

  deleteJob(id) {
    console.log('you are trying to delete job: ', id)
    try { jobsService.deleteJob(id) } catch (error) {
      console.log("the delete didn't work:", error)
    }
  }
}
