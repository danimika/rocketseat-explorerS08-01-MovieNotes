export async function up(knex) {
  await knex.schema.createTable('movie_tags', function(table) {
    table.increments('id').primary()
    table.integer('note_id').references('id').inTable('movie_notes').onDelete("CASCADE")
    table.integer('user_id').references('id').inTable('users')
    table.string('name')
  })
}


export async function down(knex) {
  await knex.schema.dropTableIfExists('movie_tags')
}