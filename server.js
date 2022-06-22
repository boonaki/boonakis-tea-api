const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const PORT = process.env.PORT || 8000

/*
Each tea will have origin, name, color, image, taste description
*/

const teas = {
    'earl gray' : {
        'Origin' : 'England',
        'Caffeine' : '40-120mg',
        'Color' : 'Grey, earthy beige',
    },
    'green tea' : {
        //"image" : "file path",
        'Origin' : 'China',
        'Caffeine' : '12mg',
        'Color' : 'Green',
        "taste" : 'sweet, bittersweet, nutty, vegetal, buttery, floral, fruity, and oceanic'
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