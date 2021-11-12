import * as yup from 'yup'
import { Request, Response } from 'express'
import tools from '@/controllers/tools'

// check validity
/* schema
  .isValid({
    name: 'jimmy',
    age: 24,
  })
  .then(function (valid) {
    valid; // => true
  }); */

// you can try and type cast objects to the defined schema
// schema.cast({
//  name: 'jimmy',
//  age: '24',
//  createdOn: '2014-09-23T19:25:25Z',
// });

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

const schema = yup.object().shape({
  login: yup.number().required(),
  name: yup.string().required(),
  cpf: yup.string().required().length(11),
  email: yup.string().email().required(),
  codigoAgente: yup.string().length(6),
})

class ValidationUser {
  async validateUserCreate(data: any, tools: any) {
    const { login, name, cpf, email, codigoAgente } = data

    const { userRepository } = await tools.getRepositoryUser()
    /*
    const db = await userRepository.findbyLogin(login)
    if (db !== undefined) {
      return new yup.ValidationError('Login já existe', 'A', 'B')
    } */

    schema
      .validate(
        { login, name, cpf, email, codigoAgente },
        { abortEarly: false }
      )
      .catch(function error(err) {
        return new yup.ValidationError(err, 'A', 'B')
      })

    return 0
  }
}
const validationuser = new ValidationUser()

export default validationuser
