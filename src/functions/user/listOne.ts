import { Request, Response } from 'express'

export default async function listOne(req: Request, res: Response, tools: any) {
  const { userRepository } = await tools.getRepositoryUser()
  const { login } = req.params
  const result = await userRepository.findbyLogin(login)
  return result
}
