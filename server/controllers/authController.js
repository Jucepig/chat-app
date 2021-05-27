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
}