SELECT *
FROM friendships AS fs
WHERE fs.requester = $1 AND fs.status = 2;