const QUESTIONS_TABLE_NAME = 'question_dropdown';


exports.up = pgm => {
    pgm.createTable(QUESTIONS_TABLE_NAME, {
        id: 'id',
        name: { type: 'varchar(100)', notNull: true, default: 'Dropdown' },
        option: { type: 'varchar(1000)', notNull: false, default: false },
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
