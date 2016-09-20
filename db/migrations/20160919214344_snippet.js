
exports.up = function(knex, Promise) {
  return knex.schema.table('movies', (table) => {
    table.text('snippet');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropColumn('snippet');
};
