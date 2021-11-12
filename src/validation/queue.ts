import * as yup from 'yup'
import { Request, Response } from 'express'
import tools from '@/controllers/tools'

yup.setLocale({
  // use constant translation keys for messages without values
  mixed: {
    default: 'field_invalid',
  },
  // use functions to generate an error object that includes the value from the schema
  number: {
    min: ({ min }) => ({ key: 'field_too_short', values: { min } }),
    max: ({ max }) => ({ key: 'field_too_big', values: { max } }),
  },
})

class ValidationQueue {
  async validateQueueCreate(req: Request, res: Response, next: any) {
    const { name, timeout } = req.body
    const schema = yup.object().shape({
      name: yup.string().required(),
      timeout: yup.number().required().min(30).max(50),
    })

    const { queueRepository } = await tools.getRepositoryQueue()
    if ((await queueRepository.findbyName(name)) != undefined) {
      res.status(400).json({ message: 'nome já existe' })
    }

    if (req.method != 'GET') {
      schema.validate({ name, timeout }).catch(function (err) {
        err.name // { login: 2123, name: "jimmy", cpf: "12345678901", email: "jimizinho@gmail.com", codigo_agente: "123456" }
        err.errors
        res.status(400).json({ err })
      })
    }
    next()
  }
}
const validationqueue = new ValidationQueue()

export default validationqueue
