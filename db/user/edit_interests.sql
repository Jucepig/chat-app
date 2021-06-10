UPDATE users
SET interests = $2
WHERE user_id = $1
RETURNING interests;