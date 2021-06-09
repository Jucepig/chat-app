module.exports = {
  createRequest : (req, res) => {
    const db = req.app.get('db')
    const { requester, responder } = req.body
    if(!requester || !responder ) {
      return res.status(406).send('Unable to process friend request. Must have both requester and responder')
    }

    db.friendships.create_friend_request(requester, responder)
    .then( request => {
      return res.status(200).send(request)
    })
  },

  getAllRequests : async (req, res) => {
    const db = req.app.get('db')
    const { user_id } = req.params
    if(!user_id) {
      return res.status(406).send('User Id required')
    }
    
    const [ sent ] = await db.friendships.get_all_sent_friend_requests(user_id)

    const [ received ] = await db.friendships.get_all_received_friend_requests(user_id)

    const requests = [[sent], [received]]

    res.status(200).send(requests)
  },
  
  updateFriendship : (req, res) => {
    const db = req.app.get('db')
    const {friendship_id, status} = req.body
    const {user_id} = req.session.user

    if(!user_id) {
      return res.status(403).send('User must be logged in to perform action')
    }

    db.friendships.update_friend_request(friendship_id, status)
      .then(_ => {
        db.friendships.get_all_friends(user_id).then(result => {
          return res.status(200).send(result)
        }).catch(err => {
          console.log(err)
          return res.sendStatus(400)
        })
      }).catch(err => {
        console.log(err)
        return res.sendStatus(400)
      })
  },

  deleteFriendship : (req, res) => {
    const db = req.app.get('db')
    const {friendship_id} = req.params
    const {user_id} = req.session.user

    if(!user_id) {
      return res.status(403).send('User must be logged in to perform action')
    }

    db.friendships.delete_friendship(friendship_id)
      .then(_ => {
        db.friendships.get_all_friends(user_id).then(result => {
          return res.status(200).send(result)
        }).catch(err => {
          console.log(err)
          return res.sendStatus(400)
        })
      }).catch(err => {
        console.log(err)
        return res.sendStatus(400)
      })
  }
}