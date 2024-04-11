export async function up(knex){
  await knex.schema.createTable('movie_notes', function(table) {
    table.increments('id').primary()
    table.string('title')
    table.string('description')
    table.integer('rating')
    table.integer('user_id').references('id').inTable('users').onDelete("CASCADE")
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}


export async function down(knex){
  await knex.schema.dropTableIfExists('movie_notes')
}