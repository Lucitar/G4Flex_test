import { Request, Response } from 'express'

export default async function deleteUser(
  req: Request,
  res: Response,
  tools: any
) {
  const { userRepository } = await tools.getRepositoryUser()
  const { login } = req.body
  const result = await userRepository.deleteUser(login)
  return result
}
