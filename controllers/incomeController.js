const Income = require('../models/incomeModel');

const getIncome = async (req, res) => {
    try {
        const income = await Income.findAllByUserId(req.user.id);
        res.status(200).json(income);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch income' });
    }
};

const addIncome = async (req, res) => {
    try {
        const { amount, source, date } = req.body;
        if (!amount || !source || !date) {
            return res.status(400).json({ error: 'Amount, source, and date are required' });
        }
        
        const incomeId = await Income.create(req.user.id, amount, source, date);
        res.status(201).json({ message: 'Income added', incomeId });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add income' });
    }
};

const updateIncome = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount, source, date } = req.body;
        
        const updatedRows = await Income.update(id, req.user.id, amount, source, date);
        if (updatedRows === 0) {
            return res.status(404).json({ error: 'Income not found or unauthorized' });
        }
        res.status(200).json({ message: 'Income updated' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update income' });
    }
};

const deleteIncome = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedRows = await Income.delete(id, req.user.id);
        if (deletedRows === 0) {
            return res.status(404).json({ error: 'Income not found or unauthorized' });
        }
        res.status(200).json({ message: 'Income deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete income' });
    }
};

module.exports = { getIncome, addIncome, updateIncome, deleteIncome };
