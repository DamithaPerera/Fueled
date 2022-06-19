const QUESTIONS_TABLE_NAME = 'short_answers';


exports.up = (knex) => knex.schema.createTable(QUESTIONS_TABLE_NAME, (t) =>{
    t.increments('id').unsigned().primary();
    t.text('description').notNullable().defaultTo('Short Answer');
    t.string('short_answer_text', 255).notNullable();
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
});

exports.down = (knex) => knex.schema.dropTable(QUESTIONS_TABLE_NAME);

