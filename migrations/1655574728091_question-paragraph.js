const QUESTIONS_TABLE_NAME = 'question_paragraph';


exports.up = pgm => {
    pgm.createTable(QUESTIONS_TABLE_NAME, {
        id: 'id',
        name: { type: 'varchar(100)', notNull: true, default: 'Long Answer text' },
        questionParagraph: { type: 'varchar(1000)', notNull: true },
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
