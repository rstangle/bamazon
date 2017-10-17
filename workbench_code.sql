-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS bamazon_db;
-- Create a database called bamazon_db --
CREATE DATABASE bamazon_db;

-- Use programming db for the following statements --

CREATE TABLE products(
  -- Create a numeric column called "item_id" which will automatically increment its default value as we create new rows. --
	item_id INTEGER(11) auto_increment NOT NULL,
  -- Create a string column called "product_name" --
	product_name VARCHAR(100) NOT NULL,
	-- Create a string column called "department_name" --
	department_name VARCHAR(100) NOT NULL,
  -- Create an decimal column called "price" --
	price DECIMAL(10,2) NOT NULL,
  -- Create a numberic column called "quantity" --
	quantity INT NOT NULL,

  -- Set the id as this table's primary key
	primary key(item_id)
);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("weight belt", "athletics", 35.99, 10);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("nano 6 -- size: 10", "shoes", 75.00, 6);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("dry fit shirt -- size: M", "apparel", 19.99, 25);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("running shorts -- size: M", "apparel", 22.99, 18);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("wodies", "athletics", 14.99, 12);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("bottled water - 32 pack", "sundries", 4.99, 50);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("chalk", "sundries", 7.99, 7);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("knee sleeves", "athletics", 24.99, 12);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("compression socks", "apparel", 20.99, 11);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("deodorant", "sundries", 4.99, 75);