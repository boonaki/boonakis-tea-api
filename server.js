const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('public'))
app.use('/assets', express.static('assets'));

const PORT = process.env.PORT || 8000

/*
Each tea will have origin, name, color, image, taste description and plant derivative
https://tea-api-boonaki.herokuapp.com/
*/

const teas = {
    'earlgray' : {
        "name" : "Earl Gray",
        "image" : "https://tea-api-boonaki.herokuapp.com/assets/earl_gray.jpg",
        'origin' : 'England',
        'caffeine' : '40-120mg',
        'color' : 'Grey, earthy beige',
        "plant" : 'blend'
    },
    'green' : {
        "name": "Green",
        "image" : "https://tea-api-boonaki.herokuapp.com/assets/green.jpg",
        'origin' : 'China',
        'caffeine' : '12mg',
        'color' : 'Green',
        'taste' : 'sweet, bittersweet, nutty, vegetal, buttery, floral, fruity, oceanic',
        'plants' : 'Camellia sinensis'
    },
    'oolong' : {
        'origin' : 'China',
        'caffeine' : '12mg',
        'color' : 'Green',
        'taste' : 'varied',
        'plant' : 'Camellia sinensis'
    },
    'unknown' : {
        'Origin' : 'NA',
        'Caffeine' : 'NA',
        'Color' : 'NA',
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/teas', (req,res) => {
    res.json(teas)
})

app.get('/api/teas/:name', (req,res) => {
    let teaname = req.params.name.toLowerCase()
    if(teas[teaname]){
        res.json(teas[teaname])
    }else{
        res.json(teas.unknown)
    }
})


app.listen(PORT, () => {
    console.log('server is now running')
})