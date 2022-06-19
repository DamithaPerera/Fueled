const QUESTIONS_TABLE_NAME = 'questions';

exports.up = (knex) => knex.schema.createTable(QUESTIONS_TABLE_NAME, (t) => {
    t.increments('id').unsigned().primary();
    t.string('description', 255).notNullable();
    t.integer('short_answers_id').unsigned();
    t.foreign('short_answers_id').references('id').inTable('short_answers')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    t.integer('question_paragraph_id').unsigned();
    t.foreign('question_paragraph_id').references('id').inTable('question_paragraph')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    t.integer('question_checkbox_id').unsigned();
    t.foreign('question_checkbox_id').references('id').inTable('question_checkbox')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    t.integer('question_multiple_choice_id').unsigned();
    t.foreign('question_multiple_choice_id').references('id').inTable('question_multiple_choice')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    t.integer('question_dropdown_id').unsigned();
    t.foreign('question_dropdown_id').references('id').inTable('question_dropdown')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');


    t.timestamp('created_at').defaultTo(knex.fn.now());
    t.timestamp('updated_at').defaultTo(knex.fn.now());

});


exports.down = (knex) => knex.schema.dropTable(QUESTIONS_TABLE_NAME);

