const QUESTIONS_TABLE_NAME = 'question_dropdown';


exports.up = (knex) => knex.schema.createTable(QUESTIONS_TABLE_NAME, (t) => {
    t.increments('id').unsigned().primary();
    t.text('name').notNullable().defaultTo('Dropdown');
    t.string('option', 225).notNullable();
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
})

exports.down = (knex) => knex.schema.dropTable(QUESTIONS_TABLE_NAME);
