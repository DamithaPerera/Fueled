const QUESTIONS_TABLE_NAME = 'questions';

exports.up = pgm => {
    pgm.createTable(QUESTIONS_TABLE_NAME, {
        id: 'id',
        description: { type: 'varchar(1000)', notNull: true },
        shortAnswerId: { type: 'integer', notNull: false, references: '"short_answers"', onDelete: 'cascade' },
        longAnswerId: { type: 'integer', notNull: false, references: '"question_paragraph"', onDelete: 'cascade' },
        checkboxAnswerId: { type: 'integer', notNull: false, references: '"question_checkbox"', onDelete: 'cascade' },
        multipleAnswerId: { type: 'integer', notNull: false, references: '"question_multiple_choice"', onDelete: 'cascade' },
        dropdownAnswerId: { type: 'integer', notNull: false, references: '"question_dropdown"', onDelete: 'cascade' },
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
        updatedAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        },
    })

};

exports.down = pgm => {
    pgm.dropTable(QUESTIONS_TABLE_NAME)
};
