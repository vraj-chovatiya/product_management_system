import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const [form, setForm] = useState({ sku: '', product_name: '', category: '', material: '', price: '', status: '' });

    useEffect(() => {
        axios.get('http://localhost:5000/api/products').then(res => setProducts(res.data));
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => { 
        e.preventDefault();
        await axios.post('http://localhost:5000/api/products', form);
        alert('Product added successfully');
    };

    return (
        <div>
            <h2>Product Management</h2>
            <form onSubmit={handleSubmit}>
                {Object.keys(form).map(key => (
                    <input key={key} name={key} placeholder={key} onChange={handleChange} required />
                ))}
                <button type="submit">Add Product</button>
            </form>
            <h3>Product List</h3>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.product_name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProductManagement;