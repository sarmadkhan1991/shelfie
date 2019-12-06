CREATE TABLE products 
(
product_id SERIAL PRIMARY KEY, 
name VARCHAR(64) NOT NULL,
price FLOAT NOT NULL,
img_url TEXT 
);