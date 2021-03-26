
exports.up = function(knex) {
    return knex.schema.createTable('the_events', function (table) {
        table.increments('id')
        table.string('name')
        table.string('description')
        table.string('image')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('the_events')
};
