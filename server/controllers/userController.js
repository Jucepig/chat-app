module.exports = {
  checkOnlineStatus: (req,res) => {
    const db = req.app.get('db')
    const { user_id } = req.params
    db.user.get_user(user_id)
      .then(([result]) => {
        delete result.password
        if(!result.online) {
          return res.status(400).send(result.online)
        }
        req.session.user = result
        return res.status(200).send(req.session.user)
      })
      .catch(err => {
        console.log(err)
        return res.status(500).send(err)
      })
  }
}