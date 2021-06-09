UPDATE friendships
SET status = $2
WHERE friendship_id = $1;