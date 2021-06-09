SELECT 
u.user_id,
u.username, 
u.profile_pic,
u.online
FROM users AS u
JOIN friendships AS fs ON u.user_id = fs.requester AND u.user_id = fs.responder
WHERE u.user_id = $1 AND fs.status = 1;