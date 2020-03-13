CREATE DATABASE back_end_project

CREATE TABLE users (
    id serial PRIMARY KEY,
    name text,
    email text,
    password text,

);

CREATE TABLE images (
    id serial PRIMARY KEY,
    picture url NOT NULL 

);

CREATE TABLE comments (
    id serial PRIMARY KEY,
    user_id int REFERENCES users(id),
    picture_id int REFERENCES images(id),
    comment text,
    likes int

);

INSERT INTO users (name, email, password, followers)
VALUES 
('Yusuke Urameshi', 'spiritgun1@gmail.com', 'genkai', 1000)

INSERT INTO images (picture)
VALUES 
()


INSERT INTO comments (user_id, picture_id, comment, likes)
VALUES 
(1, 1, 'Hiei is sick', 333)



-- curl "https://api.proxycrawl.com/scraper?token=czW9s0vOzadBwFgLrlRP-g&url=https://www.film-grab.com/2019/"

