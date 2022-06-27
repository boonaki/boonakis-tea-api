const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('public'))
app.use('/assets', express.static('assets'));

const PORT = process.env.PORT || 8000

/*
Each tea will have name, image, origin, type (if not base type), caffeine levels, description, taste and color
NOTE: not every tea known to man is in this database
If tea is a blend, include disclaimer that original type is only included in the blend
https://tea-api-boonaki.herokuapp.com/
*/

const teas = {

    'black' : {
        'name' : 'Black Tea',
        'altnames' : 'Red Tea',
        'origin' : 'China',
        'image' : 'https://commons.wikimedia.org/wiki/File:Cup_of_black_tea.JPG#/media/File:Cup_of_black_tea.JPG',
        'caffeine' : '40-120mg',
        'sources' : ['https://en.wikipedia.org/wiki/Black_tea'],
        'description' : 'Black tea, also translated to red tea in various East Asian languages, is a type of tea that is more oxidized than other types',
        'colorDescription' : 'red, amber',
        'tasteDescription' : 'smoky, earthy, spicy, nutty, citrus, caramel, leather, fruity, and honey',
        'types' : {
            "assam" : {
                'name' : 'Assam Tea',
                'altnames' : '',
                'image' : 'https://commons.wikimedia.org/wiki/File:Assam-Tee_SFTGFOP1.jpg#/media/File:Assam-Tee_SFTGFOP1.jpg',
                'origin' : 'Assam, India',
                'caffeine' : '60-110mg',
                'decription' : 'Assam tea is mostly grown at or near sea level and is known for its body, briskness, malty flavour, and strong, bright colour. Assam teas, or blends containing Assam, are often sold as "breakfast" teas.',
                'sources' : ['https://en.wikipedia.org/wiki/Assam_tea'],
                'colorDescription' : 'deep-amber',
                'tasteDescription' : 'The flavor can range from brisk, smokey, earthy, musky and strong to a lighter cup with chocolate, cocoa, or even sweet and spicy notes',

            },

            "darjeeling" : {
                'name' : 'Darjeeling Tea',
                'altnames' : '',

                'image' : 'https://commons.wikimedia.org/wiki/File:Darjeeling,_India,_Darjeeling_tea_in_variety,_Black_tea.jpg#/media/File:Darjeeling,_India,_Darjeeling_tea_in_variety,_Black_tea.jpg',

                'origin' : 'India',
                'caffeine' : '50-120mg',

                'decription' : 'Darjeeling tea is a black tea that is grown and processed in the Darjeeling or Kalimpong Districts in West Bengal, also among the only teas in the world with a Geographical Indication trademark',

                'sources' : ['hhttps://en.wikipedia.org/wiki/Darjeeling_tea', 'https://www.thespruceeats.com/tea-flushes-in-darjeeling-765194', 'https://www.seriouseats.com/why-you-should-drink-more-darjeeling-tea-what-is-first-flush'],

                'colorDescription' : 'varying based on how its brewed, from light yellow to orange to a deep red.',
                'tasteDescription' : 'musky-sweet tasting notes similar to muscat wine',
            },
            
            "lapsangSouchong" : {
                'name' : 'Lapsang Souchong',
                'altnames' : 'Smoked Tea, Smoky Souchong',
                'image' : 'https://commons.wikimedia.org/wiki/File:Lapsang_Souchong.jpg#/media/File:Lapsang_Souchong.jpg',

                'origin' : 'Fujian Province, China',
                'caffeine' : 'varying',

                'decription' : 'Lapsang Souchong is a tea that is smoke-dried over a pinewood fire',

                'sources' : ['https://en.wikipedia.org/wiki/Lapsang_souchong', ],

                'colorDescription' : 'ranging from amber to caramel to deep red.',
                'tasteDescription' : 'sweet, piney, smoky',
            },

            "keemun" : {
                'name' : 'Keemun',
                'altnames' : 'Qimen Red Tea',
                'image' : 'https://commons.wikimedia.org/wiki/File:Keemun-img1.jpg#/media/File:Keemun-img1.jpg',

                'origin' : 'China',
                'caffeine' : '25-45mg',

                'decription' : 'A black tea ',

                'sources' : ['https://en.wikipedia.org/wiki/Keemun'],

                'colorDescription' : 'bright red',
                'tasteDescription' : 'smooth, fruity, malty, unsweetened cocoa',
            },

            "dianHong" : {
                'name' : 'Dian Hong',
                'altnames' : '',
                'image' : '',

                'origin' : '',
                'caffeine' : '',

                'decription' : '',

                'sources' : [''],

                'colorDescription' : '',
                'tasteDescription' : '',
            },
            "orangePekoe" : {
                'name' : 'Orange Pekoe',
                'altnames' : '',
            },
        },
        'blends' : {
            "earlGrey" : {
                'name' : 'Earl Grey',
                'altnames' : '',
            },
            "ladyGrey" : {
                'name' : 'Lady Grey',
                'altnames' : '',
            },
            "englishBreakfast" : {
                'name' : 'English Breakfast',
                'altnames' : '',
            },
            "englishAfternoon" : {
                'name' : 'English Afternoon',
                'altnames' : '',
            },
            "irishBreakfast" : {
                'name' : 'Irish Breakfast',
                'altnames' : '',
            },
            "masalaChai" : {
                'name' : 'Masala Chai',
                'altnames' : '',
            },
            "russianCaravan" : {
                'name' : 'Russian Caravan',
                'altnames' : '',
            },
            "lycheeBlackTea" : {
                'name' : 'Lychee Black Tea',
                'altnames' : '',
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
        'caffeine' : 'time/temperature based',
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

    'yellow' : {
        'name' : 'Yellow Tea',
        'caffeine' : 'time/temperature based',
        'origin' : 'East Asia',
        'description' : '',
        'colorDescription' : 'Light green or light yellow',
        'tasteDescription' : 'floral, fresh, fruity, with a hint of cucumber or melon.',
        'types' : {

        },
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