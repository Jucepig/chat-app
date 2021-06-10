module.exports = {
  getUser: (req,res) => {
    const db = req.app.get('db')
    const { user_id } = req.params
    db.user.get_user(user_id)
      .then(([result]) => {
        delete result.password
        return res.status(200).send(result)
      })
      .catch(err => {
        console.log(err)
        return res.status(500).send(err)
      })
  },

  getAllUsers: (req, res) => {
    const db = req.app.get('db')
    db.user.get_all_users()
      .then(result => {
        return res.status(200).send(result)
      })
      .catch(err => {
        console.log(err)
        return res.status(500).send(err)
      })
  },

  editUsername: (req, res) => {
    const db = req.app.get('db')
    const {user_id} = req.params
    const {username} = req.body
    db.user.edit_username(user_id, username)
      .then(([result]) => {
        delete result.password
        return res.status(200).send(result)
      })
      .catch(err => {
        console.log(err)
        return res.status(500).send(err)
      })
  },

  editInterests: (req, res) => {
    const db = req.app.get('db')
    const {user_id} = req.params
    const {interests} = req.body
    db.user.edit_interests(user_id, interests)
      .then(([result])=> {
        delete result.password
        req.session.user = result
        console.log('userCtrl: line 50', result)
        return res.status(200).send(req.session.user)
      })
      .catch(err => {
        console.log(err)
        return res.status(500).send(err)
      })
  }
}