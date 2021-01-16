const path = require('path')
const express = require('express')
const multer = require('multer')
const hbs = require('hbs')
const Image = require('./models/Image')
require('./db/mongoose')


// Path setup
const upload = multer({dest: '../public/img/'})
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

// Setup static directory for Express
app.use(express.static(public_dir))

app.get('/', (req, res) => {
    Image.find({}).then((images) => {
        res.render('index', {
            images: images
        })
    }).catch( (error) => {
        res.status(500).send(error)
    })

})

app.post('/image', upload.single('uploaded_image'), (req, res) => {
    let extension = ''
    if(req.file.mimetype.includes('image')){
        extension = req.file.mimetype
        // console.log(extension)
    }
    const image = new Image( {
        originalname: req.file.originalname,
        type: extension,
        filename: req.file.filename,
        path: "img/"+req.file.filename
    })
    image.save().then(() => {
        res.status(201).redirect('/')
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.listen(port, () => {
    console.log(`Server started, listening on http://localhost:${port}`)
})