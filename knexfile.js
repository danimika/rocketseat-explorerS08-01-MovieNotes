export default {

  development: {
    client: 'sqlite3',
    connection: {
      filename: "./src/database/database.db"
    },
    pool: {
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./src/database/knex/migrations"
    }
  }

};
