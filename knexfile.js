// Update with your config settings.

module.exports = {

  development: {
    client: 'postgres',
    connection: 'postgres://localhost/movie-inventory',
    migrations: {directory: './db/migrations'},
    seeds: {directory: './db/seeds'}
  },

  production: {
    client: 'postgres',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
