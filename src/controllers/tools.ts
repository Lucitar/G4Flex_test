import { getConnection } from 'typeorm'

import EntityUser from '@/domain/entities/User'
import UserRepository from '@/domain/repositories/userRepository'

import EntityQueue from '@/domain/entities/Queue'
import QueueRepository from '@/domain/repositories/queueRepository'

class Tools {
  async getRepositoryUser() {
    const db = getConnection()
    const newUser = new EntityUser()
    const userRepository = db.getCustomRepository(UserRepository)
    return { newUser, userRepository }
  }

  async getRepositoryQueue() {
    const db = getConnection()
    const newQueue = new EntityQueue()
    const queueRepository = db.getCustomRepository(QueueRepository)
    return { newQueue, queueRepository }
  }
}

const tools = new Tools()

export default tools
