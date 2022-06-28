const express = require('express')
const app = express()
const cors = require('cors')
const teaData = require(__dirname + '/teadata.js')

const teas = teaData.teas
const allTeas = teaData.all

app.use(cors())
app.use('/assets', express.static('assets'));

const PORT = process.env.PORT || 8000

/*
Each tea will have name, any alternate names, image, origin, type (if not base type), caffeine levels, description, taste and color
NOTE: not every tea known to man is in this database
If tea is a blend, include disclaimer that original type is only included in the blend
https://tea-api-boonaki.herokuapp.com/
*/

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/api/all', (req,res) => {
    for(key in allTeas){
        console.log(key)
    }
    res.json(allTeas)
})

app.get('/api/teas', (req,res) => {
    res.json(teas)
})

app.get('/api/teas/:name', (req,res) => {
    let teaname = req.params.name.split(' ').join('').toLowerCase()
    console.log(teas)
    
    if(teas[teaname]){
        res.json(teas[teaname])
    }else{
        res.json(teas.unknown)
    }
    // TODO: find tea type if not one of the main types and return tea in types key of main type(black,white,oolong,green)
})


app.listen(PORT, () => {
    console.log('server is now running')
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