create table users
(
    id        serial not null,
    firstName varchar,
    lastName  varchar,
    city      varchar,
    age       numeric,
    gender    varchar,
    primary key (id)
)

create table products
(
    id    serial not null,
    name  varchar,
    type  varchar,
    price decimal,
    cost  decimal,
    primary key (id)
)

create table orders
(
    id        serial not null,
    userId    serial not null,
    status    varchar,
    createdAt date,
    solvedAt  date,
    primary key (id),
    foreign key (userId) references users (id)
)

create table orderItems
(
    id        serial not null,
    orderId   serial not null,
    productId serial not null,
    quantity  numeric,
    foreign key (orderId) references orders (id),
    foreign key (productId) references products (id)
)
