require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const { CONNECTION_STRING, SESSION_SECRET, SERVER_PORT } = process.env

// CONTROLLERS
const authCtrl = require('./controllers/authController')
const userCtrl = require('./controllers/userController')
const friendshipCtrl = require('./controllers/friendshipController')

const app = express()

app.use(express.json())

app.use(session({
  secret: SESSION_SECRET,
  resave: false, 
  saveUninitialized: true,
  cookie: {maxAge: 1000 * 60 * 60 * 24}
}))

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
})
.then(db => {
  app.set('db', db)
  console.log("Database connected")
  const io = require('socket.io')((app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))), {cors: {origin: true}})


  // --- Sockets ---

  io.on('connection', (socket) => {
    console.log(`Socket ${socket.id} connected`)
    // Server Endpoints
    socket.on('disconnect', () => {
      console.log(`Socket ${socket.id} disconnected`)
    })

    socket.on('create-private-room', (body) => {
      console.log(body)
      const {username} = body
      socket.join(username)
    })

    socket.on('send-message', body => {
        io.emit('relay-message', body)
    })

    socket.on('private-message', body => {
      console.log(body)
      socket.to(body.room).emit('private-message', body)
    })

    socket.on('join-room', body => {
      socket.join(body.room)
      const message = `${body.username} has joined "${body.room}" room`
      socket.to(body.room).emit('relay-message', {message, username: body.username})
    })
  })
})
.catch(err => console.log(err))


// Auth
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)

// User 
app.get('/api/user/:user_id', userCtrl.getUser)
app.get('/api/users', userCtrl.getAllUsers)
app.put('/api/user/:user_id', userCtrl.editInterests)

// Friendships
app.post('/api/friendships', friendshipCtrl.createRequest)
app.get('/api/friendships/:user_id', friendshipCtrl.getAllRequests)
app.post('/api/friendships/update', friendshipCtrl.updateFriendship )
app.delete('/api/friendships/:friendship_id', friendshipCtrl.deleteFriendship)