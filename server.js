const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const PORT = process.env.PORT || 8000

const teas = {
    'earl gray' : {
        'Origin' : 'England',
        'Caffeine' : '40-120mg',
        'Color' : 'Grey, earthy beige',
    },
    'green tea' : {
        'Origin' : 'China',
        'Caffeine' : '12mg',
        'Color' : 'Green',
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

app.get('/api/:name', (req,res) => {
    let teaname = req.params.name.toLowerCase()
    if(teas[teaname]){
        res.json(tea[teaname])
    }else{
        res.json(tea.unknown)
    }
})

app.listen(PORT, () => {
    console.log('server is now running on port 8000')
})