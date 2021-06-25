// Import libraries
const express = require('express')

// Setup app
const app = express()

// Middleware
app.use(express.static('public'))

// Routes
// localhost:3000/labs
app.get('/labs', (req, res) => {
    res.send(`
      <html><body>
        <li>1. <a href="/profiles/waroj">/profiles/waroj</a></li>
        <li>2. <a href="/api/profiles/waroj">/api/profiles/waroj</a></li>
        <li>3. <a href="/cat-simulator">/cat-simulator</a></li>
        <li>4. <a href="/admin/grades">/admin/grades</a> AND <a href="/api/grades">/api/grades</a> AND <a href="/boredom">/boredom</a></li>
      </body></html>
    `)
  }) 

// localhost:3000/profiles/waroj
app.get('/profiles/waroj', (req, res) => {
    res.send(`
      <html><body>
        <h1>Waroj Yoopitaksakul</h1>
        Nickname: Peet<br><br>
        Likes: Black color, Computer, Techonology<br><br>
        Hobbies: Listen to music, Play games, Read a book<br><br>
        Motto: Trial and error is the source of our knowledge
      </body></html>
    `)
  })

// localhost:3000/api/profiles/waroj
app.get('/api/profiles/waroj', (req, res) => {
    res.json({
        name: 'Waroj Yoopitaksakul' ,
        nickname: 'Peet',
        likes: [
          'Black color', 'Computer', 'Techonology'
        ],
        hobbies: [
          'Listen to music', 'Play games', 'Read a book'
        ],
        motto: 'Trial and error is the source of our knowledge'
    })
})

// localhost:3000/cat
app.get('/cat-simulator', (req, res) => {
  res.send(`
    <html>
      <head><link rel="stylesheet" href="/styles.css"></head>
      <body class="cats">
      <a href="/cat-result">Pet the cat</a>
      <img src="/images/cat-simulator.jpg" width="500" />
    </body></html>
  `)
 })

 app.get('/cat-result', (req, res) => {
   res.send(`
      <html>
        <head><link rel="stylesheet" href="/styles.css"></head>
        <body class="cats">
        <a href="/cat-simulator">Ignore the cat</a>
        <img src="/images/cat-result.jpg" width="500" />
      </body></html>
   `)
 })

// localhost:3000/status
app.get('/admin/grades', (req, res) => {
    res.sendStatus(401)
})

app.get('/api/grades', (req, res) => {
    res.status(401).send('Invalid OAuth token')
})

app.get('/boredom', (req, res) => {
    res.status(404).send("Sorry - we don't have that here!")
})

// Start server
const PORT = 3000
app.listen(PORT, () => console.log(
  `listening on http://localhost:${PORT}/labs`))