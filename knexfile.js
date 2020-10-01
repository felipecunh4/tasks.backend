module.exports = {
  client: "postgresql",
  connection: {
    database: "tasks",
    user: "postgres",
    password: "passw0rd",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
  },
};
