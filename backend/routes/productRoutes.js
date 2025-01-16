const express = require('express');
const router = express.Router();
const { createProduct, getProducts } = require('../models/Product');

router.post('/products', (req, res) => {
    createProduct(req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.status(201).send('Product added successfully');
    });
});

router.get('/products', (req, res) => {
    getProducts((err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

module.exports = router;