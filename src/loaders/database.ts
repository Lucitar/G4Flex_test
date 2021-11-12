import 'reflect-metadata'
import { createConnection, Connection } from 'typeorm'

import PostgresEntities from '@/domain/entities'
import postgresDbConfig from '@/config/postgres'
import logger from './logger'

class DatabaseHelper {
  private connections: Connection[]

  constructor() {
    this.connections = []
  }

  async startPostgresConnection() {
    try {
      const postgresConnection = await createConnection({
        ...postgresDbConfig,
        entities: [...Object.values(PostgresEntities)],
        logging: false,
        syncronize: true,
        maxQueryExecutionTime: 1000,
        name: 'default',
      })
      this.connections.push(postgresConnection)
      logger.info('Postgres connected')
      return postgresConnection
    } catch (error: any) {
      logger.error(`Database error: ${error.message}`)
      return process.exit(1)
    }
  }

  initConnections() {
    return Promise.all([this.startPostgresConnection()])
  }

  closeConnections() {
    const promises = this.connections.map((conn) => conn.close())

    return Promise.all(promises)
  }
}

export default new DatabaseHelper()
