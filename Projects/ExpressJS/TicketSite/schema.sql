-- Define the 'users' table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    password INT,
    email TEXT UNIQUE NOT NULL
);

-- Define the 'products' table if it doesn't exist
CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL
);
