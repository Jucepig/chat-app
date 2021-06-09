SELECT *
FROM friendships AS fs
WHERE fs.responder = $1 AND fs.status = 2;