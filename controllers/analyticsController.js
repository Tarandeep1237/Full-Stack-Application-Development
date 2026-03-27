const db = require('../config/db');

const getAnalytics = async (req, res) => {
    try {
        const userId = req.user.id;
        
        // Total Income
        const [incomeTotal] = await db.query(
            'SELECT COALESCE(SUM(amount), 0) AS totalIncome FROM income WHERE user_id = ?',
            [userId]
        );
        
        // Total Expenses
        const [expenseTotal] = await db.query(
            'SELECT COALESCE(SUM(amount), 0) AS totalExpense FROM expenses WHERE user_id = ?',
            [userId]
        );
        
        // Expenses by Category
        const [categoryBreakdown] = await db.query(
            'SELECT category, SUM(amount) AS total FROM expenses WHERE user_id = ? GROUP BY category',
            [userId]
        );
        
        // Expenses by Month (last 6 months trend)
        const [monthlyExpenses] = await db.query(
            `SELECT DATE_FORMAT(date, '%Y-%m') AS month, SUM(amount) AS total 
             FROM expenses WHERE user_id = ? 
             GROUP BY month ORDER BY month DESC LIMIT 6`,
            [userId]
        );

        res.status(200).json({
            totalIncome: incomeTotal[0].totalIncome,
            totalExpense: expenseTotal[0].totalExpense,
            balance: incomeTotal[0].totalIncome - expenseTotal[0].totalExpense,
            categoryBreakdown,
            monthlyExpenses: monthlyExpenses.reverse()
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch analytics' });
    }
};

module.exports = { getAnalytics };
