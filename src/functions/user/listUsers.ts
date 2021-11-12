import { Request, Response } from 'express'

export default async function listUsers(
  req: Request,
  res: Response,
  tools: any
) {
  const { userRepository } = await tools.getRepositoryUser()
  const result = await userRepository.findAll()
  return result
}
