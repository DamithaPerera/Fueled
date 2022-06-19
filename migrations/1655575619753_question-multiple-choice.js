const QUESTIONS_TABLE_NAME = 'question_multiple_choice';


exports.up = pgm => {
    pgm.createTable(QUESTIONS_TABLE_NAME, {
        id: 'id',
        name: { type: 'varchar(100)', notNull: true, default: 'Multiple Choice' },
        option: { type: 'varchar(1000)', notNull: false },
        optionSelection: { type: 'boolean', notNull: true, default : false},
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