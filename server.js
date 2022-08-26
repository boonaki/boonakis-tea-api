const express = require('express')
const app = express()
const cors = require('cors')
// const bodyParser = require('body-parser')
const teaData = require(__dirname + '/teadata.js')
require('dotenv').config()
const connectionString = process.env.CONNECTIONSTRING

const teas = teaData.teas
const allTeas = teaData.all

app.use(cors())
app.use('/assets', express.static('assets'));

const PORT = process.env.PORT || 8000

const MongoClient = require('mongodb').MongoClient

/*
Each tea will have name, any alternate names, image, origin, type (if not base type), caffeine levels, description, taste and color
NOTE: not every tea known to man is in this database
If tea is a blend, include disclaimer that original type is only included in the blend
https://tea-api-boonaki.herokuapp.com/
*/

MongoClient.connect(connectionString, { useUnifiedTopology: true }) 
    .then(client => {
        console.log('connected to db')
        const db = client.db('tea-api')
        const organizedCollection = db.collection('teas-organized')
        const unorganizedCollection = db.collection('teas-unorganized')
        // app.set('view engine', 'ejs')
        // app.use(bodyParser.urlencoded({ extended: true }))
        // app.use(express.static('public'))
        // app.use(bodyParser.json())

        app.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html')
        })
        
        app.get('/api/all', (req,res) => {
            res.json(allTeas)
            unorganizedCollection.find().toArray()
                .then(result => {
                    res.json(result)
                })
                .catch(err => console.error(err))
        })
        
        app.get('/api/teas', (req,res) => {
            // res.json(teas)
            organizedCollection.find().toArray()
                .then(result => {
                    res.json(result)
                })
                .catch(err => console.error(err))
        })
        
        app.get('/api/teas/:name', (req,res) => {
            let teaname = req.params.name.split(' ').join('').toLowerCase()
            unorganizedCollection.find({slug:teaname}).toArray()
                .then(result => {
                    res.json(result)
                })
                .catch(err => {
                    console.error(err)
                })
            
            // if(teas[teaname]){
            //     res.json(teas[teaname])
            // }else if(allTeas[teaname]){
            //     res.json(allTeas[teaname])
            // }else{
            //     res.json(teas.unknown)
            // }
        })

        
        
        app.listen(PORT, () => {
            console.log('server is now running')
        })
    })

/**** SOURCES ****/
/*
- https://www.itoen-global.com/allabout_greentea/varieties.html
- wikipedia
- https://simplelooseleaf.com/blog/black-tea/black-tea-types/
- https://www.garfieldmedicalcenter.com/GMC-Blog/2016/October/Different-Types-of-Tea-and-Caffeine-Content.aspx
- https://www.goodandpropertea.com/blogs/all/everything-you-need-to-know-about-white-tea
- https://teapro.co.uk/white-tea/
*/