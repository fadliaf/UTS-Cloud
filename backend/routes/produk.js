const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT name, price, image FROM products');
    res.json(rows);
  } catch (err) {
    console.error('[❌ ERROR QUERY]', err);
    res.status(500).json({ error: 'Database Error' });
  }
});

module.exports = router;
