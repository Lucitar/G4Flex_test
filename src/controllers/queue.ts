import { Request, Response } from 'express'
import tools from '@/controllers/tools'
import functions from '@/functions/queue'
import { IResponse, ResponseStatus } from '@/utils/service'
import { ValidationError } from 'yup'

class Queue {
  async createQueue(
    req: Request,
    res: Response<IResponse>
  ): Promise<Response<IResponse>> {
    try {
      const name = await functions.createQueue(req, res, tools)
      return res.json({
        status: ResponseStatus.OK,
        data: name,
        message: `Fila ${name.name} cadastrada. `,
      })
    } catch (error: any) {
      if (error instanceof ValidationError) {
        return res.status(error.statusCode ?? 400).json({
          status: ResponseStatus.BAD_REQUEST,
          errors: error.errors,
        })
      }
      return res.status(500).json({
        status: ResponseStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
    }
  }

  async listQueues(req: Request, res: Response) {
    const queues = await functions.listQueues(req, res, tools)
    res.json(queues)
  }

  async listOne(req: Request, res: Response) {
    const queues = await functions.listOne(req, res, tools)
    res.json(queues)
  }

  async updateQueue(req: Request, res: Response) {
    const name = await functions.updateQueue(req, res, tools)
    res.json(`Dados do fila ${name} alterados.`)
  }

  async deleteQueue(req: Request, res: Response) {
    const name = await functions.deleteQueue(req, res, tools)
    res.json(`Dados da fila ${name} deletados.`)
  }
}
const queue = new Queue()

export default queue
