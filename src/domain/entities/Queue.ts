import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm'

@Entity({ name: 'queue' })
export default class Queue extends BaseEntity {
  @PrimaryColumn()
  name!: string

  @Column()
  timeout!: number
}
