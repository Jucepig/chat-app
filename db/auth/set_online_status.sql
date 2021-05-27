UPDATE users
SET online = $2
WHERE user_id = $1
RETURNING online;