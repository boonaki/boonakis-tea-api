const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('public'))
app.use('/assets', express.static('assets'));

const PORT = process.env.PORT || 8000

/*
Each tea will have origin, type (if not base type), 
https://tea-api-boonaki.herokuapp.com/
*/

const teas = {

    'black' : {
        'name' : 'Black Tea',
        'origin' : 'China',
        'caffeine' : '40-120mg',
        'description' : '',
        'colorDescription' : 'red, amber',
        'tasteDescription' : 'smoky, earthy, spicy, nutty, citrus, caramel, leather, fruity, and honey',
        'types' : {
            "Assam tea" : {
                
            },
            "Darjeeling" : {

            },
            "Lapsang Souchong" : {

            },
            "Keemun" : {

            },
            "Dian Hong" : {

            },
            "Orange Pekoe" : {

            },
        },
        'blends' : {
            "Earl Grey" : {
                
            },
            "Lady Grey" : {
                
            },
            "English Breakfast" : {
                
            },
            "English Afternoon" : {
                
            },
            "Irish Breakfast" : {
                
            },
            "Masala Chai" : {
                
            },
            "Russian Caravan" : {

            },
            "Lychee black tea" : {

            },
        }
    },

    'green' : {
        'name': 'Green Tea',
        'image' : 'https://tea-api-boonaki.herokuapp.com/assets/green.jpg',
        'origin' : 'China',
        'caffeine' : '~10mg',
        'description' : '',
        'colorDescription' : 'varying shades of green',
        'tasteDescription' : 'sweet, bittersweet, nutty, vegetal, buttery, floral, fruity, oceanic',
        'blends' : {
            "Sencha" : {

            },
            "Matcha" : {

            },
            "Shincha" : {

            },
            "Bancha" : {

            },
            "Gyokuro" : {

            },
            "Kukicha" : {

            },
            "Tencha" : {

            },
            "Konacha" : {

            },
            "Genmaicha" : {

            },
            "Hojicha" : {

            },
            "Fukamushi Sencha" : {

            },
            "Kabusecha" : {

            }
        }
    },

    'oolong' : {
        'name' : 'Wulong (oolong) Tea',
        'caffeine' : '37-55mg',
        'origin' : 'East Asia',
        'description' : '',
        'colorDescription' : 'bright green or yellow, or dark amber and red',
        'tasteDescription' : 'Similar to black tea, though varied oxidation levels results in widely varied tastes',
        'types' : {
            "Da Hong Pao" : {

            },
            "Shui Jin Gui" : {

            },
            "Tieluohan" : {

            },
            "Bai Jiguan" : {

            },
            "Rougui" : {

            },
            "Shui Xian" : {

            },
            "Tieguanyin" : {

            },
            "Huangjin Gui" : {

            },
            "Dancong" : {

            },
            "Dongding" : {

            },
            "Dongfang Meiren" : {

            },
            "Alishan" : {

            },
            "Lishan" : {

            },
            "Baozhong" : {

            },
            "Ruan Zhi" : {

            },
            "Jin Xuan" : {

            },
            "Black Oolong" : {
                
            },
            "High mountain" : {

            },
            "Tieguanyin" : {

            },
            "Darjeeling" : {

            },
            "Assam Smoked Oolong" : {

            },
            "Vietnamese Oolong" : {

            }

        },
    },

    'white' : {
        'name' : 'White Tea',
        'caffeine' : 'time and temperature based',
        'origin' : 'East Asia',
        'description' : '',
        'colorDescription' : 'Light green or light yellow',
        'tasteDescription' : 'floral, fresh, fruity, with a hint of cucumber or melon.',
        'types' : {
            "Bai Hao Yin Zhen" : {

            },
            "Bai Mu Dan" : {

            },
            "Shou Mei" : {

            },
            "Jasmine Dragon Pearl" : {

            },
            "White Tea Cake" : {

            },
            "Snow Buds/Phoenix Eye" : {

            },
            "Jade Pillar" : {

            },
            "Malawi Satemwa Antlers" : {

            },
            "White Darjeeling" : {

            }
        }
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


/**** SOURCES ****/
/*
- https://www.itoen-global.com/allabout_greentea/varieties.html
- wikipedia
- https://simplelooseleaf.com/blog/black-tea/black-tea-types/
- https://www.garfieldmedicalcenter.com/GMC-Blog/2016/October/Different-Types-of-Tea-and-Caffeine-Content.aspx
- https://www.goodandpropertea.com/blogs/all/everything-you-need-to-know-about-white-tea
- https://teapro.co.uk/white-tea/
*/