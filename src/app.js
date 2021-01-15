const path = require('path')
const express = require('express')
const hbs = require('hbs')
require('./db/mongoose')
// Path setup
const public_dir = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')
// Express Initialization
const app = express()
const port = process.env.PORT || 3000

// Handlebars setup
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

// Setup staic directory for Express
app.use(express.static(public_dir))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'index page'
    })
})

app.listen(port, () => {
    console.log(`Server started, listensing on http://localhost:${port}`)
})