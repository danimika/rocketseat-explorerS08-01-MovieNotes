export async function up(knex) {
  await knex.schema.createTable('users', function(table) {
    table.increments('id').primary()
    table.string('name')
    table.string('email')
    table.string('password')
    table.string('avatar').nullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}


export async function down(knex) {
  await knex.schema.dropTableIfExists('users')
}
