INSERT INTO friendships
(requester, responder)
VALUES
($1, $2)
RETURNING *;