exports.up = function (knex) {
  return knex.schema.createTable("happy", (table) => {
    table.increments();
    table.string("time");
    table.string("location");
    table.string("activity");
    table.string("people");
    table.string("mood");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("happy");
};
