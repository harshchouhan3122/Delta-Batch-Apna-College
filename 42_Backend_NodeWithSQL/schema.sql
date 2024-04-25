SHOW DATABASES;

USE delta_app;

CREATE TABLE users (
    id VARCHAR(50) PRIMARY KEY,
    userName VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

SELECT * FROM users;