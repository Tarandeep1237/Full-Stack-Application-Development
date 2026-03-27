const Expense = require('../models/expenseModel');

const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.findAllByUserId(req.user.id);
        res.status(200).json(expenses);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch expenses' });
    }
};

const addExpense = async (req, res) => {
    try {
        const { amount, category, date, description } = req.body;
        if (!amount || !category || !date) {
            return res.status(400).json({ error: 'Amount, category, and date are required' });
        }
        
        const expenseId = await Expense.create(req.user.id, amount, category, date, description);
        res.status(201).json({ message: 'Expense added', expenseId });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add expense' });
    }
};

const updateExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount, category, date, description } = req.body;
        
        const updatedRows = await Expense.update(id, req.user.id, amount, category, date, description);
        if (updatedRows === 0) {
            return res.status(404).json({ error: 'Expense not found or unauthorized' });
        }
        res.status(200).json({ message: 'Expense updated' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update expense' });
    }
};

const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedRows = await Expense.delete(id, req.user.id);
        if (deletedRows === 0) {
            return res.status(404).json({ error: 'Expense not found or unauthorized' });
        }
        res.status(200).json({ message: 'Expense deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete expense' });
    }
};

module.exports = { getExpenses, addExpense, updateExpense, deleteExpense };
