const express = require('express')
const expHbs = require('express-handlebars')
const { json, urlencoded } = require('body-parser')

const { index } = require('./features/index-controller')
const { sportCreateForm, sportList, sportDetails, sportSchedule, sportCreateByForm } = require('./features/sports-controller')

const app = express()

// Templates
app.set('views', './views')
app.set('view engine', 'hbs')
app.engine('hbs', expHbs({
  extname: '.hbs',
  defaultLayout: false,
  partialsDir: ['./views/partials', './views/layouts']
}))

// Middleware
app.use(express.static('public'))
app.use(json())
app.use(urlencoded({ extended: false }))

// Routes
app.get('/', index)

// TODO: เขียนเส้นทางของคุณที่นี่ // Write your routes here
app.get('/sports', sportList)
app.post('/sports', sportCreateByForm)
app.get('/sports/new', sportCreateForm)
app.get('/sports/:slug', sportDetails)
app.get('/sports/:slug/schedule', sportSchedule)

// General
app.get('/images/:catchall', (_req, res) => res.redirect('/images/404.jpg'))

module.exports = { app }