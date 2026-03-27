const db = require('../config/db');

const Expense = {
    create: async (userId, amount, category, date, description) => {
        const [result] = await db.query(
            'INSERT INTO expenses (user_id, amount, category, date, description) VALUES (?, ?, ?, ?, ?)',
            [userId, amount, category, date, description]
        );
        return result.insertId;
    },

    findAllByUserId: async (userId) => {
        const [rows] = await db.query('SELECT * FROM expenses WHERE user_id = ? ORDER BY date DESC', [userId]);
        return rows;
    },

    findById: async (id, userId) => {
        const [rows] = await db.query('SELECT * FROM expenses WHERE id = ? AND user_id = ?', [id, userId]);
        return rows[0];
    },

    update: async (id, userId, amount, category, date, description) => {
        const [result] = await db.query(
            'UPDATE expenses SET amount = ?, category = ?, date = ?, description = ? WHERE id = ? AND user_id = ?',
            [amount, category, date, description, id, userId]
        );
        return result.affectedRows;
    },

    delete: async (id, userId) => {
        const [result] = await db.query('DELETE FROM expenses WHERE id = ? AND user_id = ?', [id, userId]);
        return result.affectedRows;
    }
};

module.exports = Expense;
