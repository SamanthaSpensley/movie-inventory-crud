  
exports.up = function(knex, Promise) {
  return knex.schema.createTable('movies', (table) => {
    table.increments();
    table.string('title');
    table.string('imageURL');
    table.string('type');
    table.integer('year', 4);
    table.integer('rating');
    table.text('description');
    table.text('note');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies');
};
