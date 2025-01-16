const db = require('../db');
const bcrypt = require('bcryptjs');

const createProduct = async (data, callback) => {
    const encryptedSKU = await bcrypt.hash(data.sku, 10);
    db.query(
        `INSERT INTO products (sku, product_name, category, material, price, status) VALUES (?, ?, ?, ?, ?, ?)`,
        [encryptedSKU, data.product_name, data.category, data.material, data.price, data.status],
        callback
    );
};

const getProducts = (callback) => {
    db.query('SELECT * FROM products', callback);
};

module.exports = { createProduct, getProducts };