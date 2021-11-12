import * as env from 'env-var'

import { app, logger, shutdownHandlers, databaseHelper } from './loaders'

const PORT = env.get('PORT').default('4000').asIntPositive()

databaseHelper
  .initConnections()
  .then(() => {
    const server = app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`)
    })

    shutdownHandlers.init(server)
  })
  .catch((error: Error) => {
    logger.error(error)
    process.exit(1)
  })
