# Product Management System

This system allows the management of product data, including listing, adding, editing, deleting products, and generating statistics based on the products. It is built using ReactJS for the front end, NodeJS for the back end, and MySQL for the database.

## Features

### 1. List All Products with Paging
- Display a list of all products.
- Pagination support for easy navigation.
- Filter products by:
  - SKU
  - Product Name
  - Category
  - Material
  - Status

### 2. Add, Edit, and Delete Products
- Add new products.
- Edit existing product details.
- Delete products from the system.
- Ensure SKU is encrypted before being stored in the database.
- Prevent duplicate SKUs from being saved in the database.

### 3. Error Handling
- All API endpoints have error handling.
- Each response is sent with the correct HTTP response code.

## Technologies Used
- **Frontend:** ReactJS
- **Backend:** NodeJS with Express
- **Database:** MySQL

