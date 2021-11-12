import uservalidator from '@/validation/user'

export default async function createUser(data: any, tools: any) {
  // { getRepositoryUser: () => PromiseLike<{ newUser: any; userRepository: any; }> | { newUser: any; userRepository: any; }; }
  await uservalidator.validateUserCreate(data, tools)
  const { newUser, userRepository } = await tools.getRepositoryUser()
  const { login, name, cpf, email, codigoAgente } = data
  // newUser.{} = req.body ???

  newUser.login = login
  newUser.name = name
  newUser.cpf = cpf
  newUser.email = email
  newUser.codigoAgente = codigoAgente
  const result = await userRepository.save(newUser)
  return result
}
