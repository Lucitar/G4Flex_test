import { EntityRepository, Repository } from 'typeorm'
import User from '@/domain/entities/User'

@EntityRepository(User)
export default class UserRepository extends Repository<User> {
  findAll() {
    return this.createQueryBuilder('user').getRawMany()
  }

  findbyLogin(login: number) {
    return this.createQueryBuilder('user')
      .where('login = :login', { login })
      .getRawOne()
  }

  updateData(
    login: number,
    name: string,
    cpf: string,
    email: string,
    codigoAgente: string
  ) {
    return this.createQueryBuilder('user')
      .update()
      .set({ name, cpf, email, codigoAgente })
      .where('login = :login', { login })
      .execute()
  }

  deleteUser(login: number) {
    return this.createQueryBuilder('user')
      .delete()
      .where('login = :login', { login })
      .execute()
  }
}
