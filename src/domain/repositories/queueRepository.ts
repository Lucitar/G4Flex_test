import { EntityRepository, Repository } from 'typeorm'
import Queue from '@/domain/entities/Queue'

@EntityRepository(Queue)
export default class QueueRepository extends Repository<Queue> {
  findAll() {
    return this.createQueryBuilder('queue').getRawMany()
  }

  findbyName(name: string) {
    return this.createQueryBuilder('queue')
      .where('name = :name', { name })
      .getRawOne()
  }

  updateData(name: string, timeout: number) {
    return this.createQueryBuilder('queue')
      .update()
      .set({ timeout })
      .where('name = :name', { name })
      .execute()
  }

  deleteQueue(name: string) {
    return this.createQueryBuilder('queue')
      .delete()
      .where('name = :name', { name })
      .execute()
  }
}
