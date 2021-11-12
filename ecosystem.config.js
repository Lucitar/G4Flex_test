module.exports = {
  apps: [
    {
      name: 'Nodejs Typescript Boilerplate',
      script: 'server.prod.js',
      env: {
        NODE_ENV: 'production',
        PORT: 4500,
        DB_HOST: '127.0.0.1',
        DB_PORT: '5432',
        DB_USER: 'flexuc',
        DB_PASS: 'postgres',
        DB_NAME: 'flexuc',
      },
    },
  ],
}
