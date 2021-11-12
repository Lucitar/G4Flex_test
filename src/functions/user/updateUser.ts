import { Request, Response } from 'express'

export default async function updateUser(
  req: Request,
  res: Response,
  tools: any
) {
  const { userRepository } = await tools.getRepositoryUser()
  const { login, name, cpf, email, codigoAgente } = req.body

  const result = await userRepository.updateData(
    login,
    name,
    cpf,
    email,
    codigoAgente
  )
  return result
}
