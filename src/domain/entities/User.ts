import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm'

@Entity({ name: 'user' })
export default class User extends BaseEntity {
  @PrimaryColumn()
  login!: number
  // type= integer???

  @Column()
  name!: string

  @Column()
  cpf!: string

  @Column()
  email!: string

  @Column({ length: 6 })
  codigoAgente!: string
}
