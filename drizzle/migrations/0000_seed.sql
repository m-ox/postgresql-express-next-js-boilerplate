-- Custom SQL migration file, put your code below! --
CREATE SCHEMA IF NOT EXISTS burnedout;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL
);

-- INSERT INTO burnedout.users
-- (id, username)
-- VALUES(nextval('burnedout.users_id_seq'::regclass), 'm-ox');