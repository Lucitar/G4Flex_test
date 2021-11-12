import { Request, Response } from 'express'

export default async function createQueue(
  req: Request,
  res: Response,
  tools: any
) {
  const { newQueue, queueRepository } = await tools.getRepositoryQueue()
  const { name, timeout } = req.body
  // newUser.{} = req.body ???

  newQueue.name = name
  newQueue.timeout = timeout

  const result = await queueRepository.save(newQueue)
  return result
}
