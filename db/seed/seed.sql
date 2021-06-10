DROP TABLE IF EXISTS chat_groups;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS chat_rooms;
DROP TABLE IF EXISTS friendships;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(50),
  password VARCHAR(400),
  profile_pic VARCHAR(100),
  interests VARCHAR(1000) default NULL,
  online BOOLEAN default NULL,
  isAdmin BOOLEAN default false
);

CREATE TABLE friendships (
  friendship_id SERIAL PRIMARY KEY, 
  requester INT NOT NULL REFERENCES users(user_id),
  responder INT NOT NULL REFERENCES users(user_id),
  status TINYINT NOT NULL default 2
);

CREATE TABLE chat_rooms (
  chat_room_id SERIAL PRIMARY KEY,
  chat_room_name VARCHAR(150),
  private BOOLEAN default NULL
);

CREATE TABLE messages (
  message_id SERIAL PRIMARY KEY,
  chat_room_id INT NOT NULL REFERENCES chat_rooms(chat_room_id),
  user_id INT NOT NULL REFERENCES users(user_id),
  message TEXT,
  created_at TIMESTAMPTZ default CURRENT_TIMESTAMP
);

CREATE TABLE chat_groups (
  chat_group_id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(user_id),
  chat_room_id INT REFERENCES chat_rooms(chat_room_id) 
);