INSERT INTO users
(username, password, profile_pic, online)
VALUES
($1, $2, $3, true)
RETURNING *;