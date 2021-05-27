const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db')
    const { username, password } = req.body
    const profilePic = `https://robohash.org/${username}?set=set5`
    const [ existingUser ] = await db.auth.find_existing_user(username)

    if(existingUser) {
      return res.status(409).send("Username already taken.")
    }

    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(password, salt)
    const [ newUser ] = await db.auth.register_new_user(username, hashPassword, profilePic)

    delete newUser.password
    req.session.user = newUser
    return res.status(200).send(req.session.user)
  },

  login: async (req, res) => {
    const db = req.app.get('db')
    const { username, password } = req.body
    const [ existingUser ] = await db.auth.find_existing_user(username)
    const user_id = existingUser.user_id

    if(!existingUser){
      return res.status(409).send('Username not found.')
    }

    const hashPassword = existingUser.password
    const isAuthenticated = bcrypt.compareSync(password, hashPassword)

    if(!isAuthenticated){
      return res.status(403).send('Password Incorrect.')
    }

    const [onlineStatus] = await db.auth.set_online_status(user_id, true)

    delete existingUser.password
    existingUser.online = onlineStatus.online
    req.session.user = existingUser
    return res.status(200).send(req.session.user)
  },

  logout: (req,res) => {
    const db = req.app.get('db')
    const { user_id } = req.session.user
    db.auth.set_online_status(user_id, false)
      .then( _ => res.sendStatus(200))
      .catch(err => {
        console.log(err)
        return res.status(500).send(err)
      })
  }
}