const QUESTIONS_TABLE_NAME = 'question_checkbox';


exports.up = (knex) => knex.schema.createTable(QUESTIONS_TABLE_NAME, (t) =>{
    t.increments('id').unsigned().primary();
    t.text('name').notNullable().defaultTo('Checkboxes');
    t.string('option', 225).notNullable();
    t.boolean('option_selection').notNullable().defaultTo(false);
    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());
    })


exports.down = (knex) => knex.schema.dropTable(QUESTIONS_TABLE_NAME);

