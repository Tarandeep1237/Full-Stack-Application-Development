const db = require('../config/db');

const Income = {
    create: async (userId, amount, source, date) => {
        const [result] = await db.query(
            'INSERT INTO income (user_id, amount, source, date) VALUES (?, ?, ?, ?)',
            [userId, amount, source, date]
        );
        return result.insertId;
    },

    findAllByUserId: async (userId) => {
        const [rows] = await db.query('SELECT * FROM income WHERE user_id = ? ORDER BY date DESC', [userId]);
        return rows;
    },

    findById: async (id, userId) => {
        const [rows] = await db.query('SELECT * FROM income WHERE id = ? AND user_id = ?', [id, userId]);
        return rows[0];
    },

    update: async (id, userId, amount, source, date) => {
        const [result] = await db.query(
            'UPDATE income SET amount = ?, source = ?, date = ? WHERE id = ? AND user_id = ?',
            [amount, source, date, id, userId]
        );
        return result.affectedRows;
    },

    delete: async (id, userId) => {
        const [result] = await db.query('DELETE FROM income WHERE id = ? AND user_id = ?', [id, userId]);
        return result.affectedRows;
    }
};

module.exports = Income;
