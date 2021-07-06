const getRGB = (req, res) => {
  const r = parseInt(req.query.r) || 0
  const g = parseInt(req.query.g) || 0
  const b = parseInt(req.query.b) || 0
  const avg = Math.round((r + g + b) / 3)

  if (avg < 128) {
    res.send(`<body style="background-color: rgb(${r}, ${g}, ${b});">
    <font color=white> red: ${r}, green: ${g}, blue: ${b} <br>
    avg: ${avg} </font>`)
  } else {
    res.send(`<body style="background-color: rgb(${r}, ${g}, ${b});">
    red: ${r}, green: ${g}, blue: ${b} <br>
    avg: ${avg} </font>`)
  }
}

module.exports = {
  getRGB
}
