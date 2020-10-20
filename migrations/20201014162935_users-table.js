
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments('id');
        tbl.text('username', 128)
            .unique()
            .notNullable();
        tbl.text('password', 128)
            .notNullable();
        tbl.text('email', 128)
            .unique()
            .notNullable();
    })
    .createTable('listings', tbl => {
        tbl.increments('id');
        tbl.string('city', 128)
           .notNullable();
        tbl.string('room_type', 128)
           .notNullable();
        tbl.integer('security_deposit')
            .notNullable();
        tbl.integer('guests_included')
           .notNullable();
        tbl.integer('min_nights')
           .notNullable();
        tbl.integer('user_id')
           .unsigned()
           .notNullable()
           .references('id')
           .inTable('users')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('listings');
};
