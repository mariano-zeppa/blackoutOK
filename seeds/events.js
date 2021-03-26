
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, name: 'Sunset Tu vieja', description: 'a test description', image:'src'},
        {id: 2, name: 'Sunset Tu vieja2', description: 'a test description', image:'src'},
        {id: 3, name: 'Sunset Tu vieja3', description: 'a test description', image:'src'}
      ]);
    });
};
