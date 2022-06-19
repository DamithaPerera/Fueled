const QUESTIONS_TABLE_NAME = 'question_paragraph';


exports.up = (knex) => knex.schema.createTable(QUESTIONS_TABLE_NAME, (t) =>{
    t.increments('id').unsigned().primary();
    t.text('name').notNullable().defaultTo('Long Answer text');
    t.string('question_paragraph', 255).notNullable();
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
    })

exports.down = (knex) => knex.schema.dropTable(QUESTIONS_TABLE_NAME);
