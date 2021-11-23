CREATE TABLE users
(
    id        INT NOT NULL,
    firstName VARCHAR,
    lastName  VARCHAR,
    city      VARCHAR,
    age       INT,
    gender    varchar,
    PRIMARY KEY (id)
)

CREATE TABLE products
(
    id    INT NOT NULL,
    name  VARCHAR,
    type  VARCHAR,
    price VARCHAR,
    cost  VARCHAR,
    PRIMARY KEY (id)
)

CREATE TABLE orders
(
    id        INT NOT NULL,
    userId    INT NOT NULL,
    status    VARCHAR,
    createdAt DATE,
    solvedAt  DATE,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES users (id)
)

CREATE TABLE orderItems
(
    orderId   INT NOT NULL,
    productId INT NOT NULL,
    quantity  INT,
    FOREIGN KEY (orderId) REFERENCES orders (id),
    FOREIGN KEY (productId) REFERENCES products (id)
)