const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('public'))
app.use('/assets', express.static('assets'));

const PORT = process.env.PORT || 8000

/*
Each tea will have name, any alternate names, image, origin, type (if not base type), caffeine levels, description, taste and color
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

                'sources' : ['https://en.wikipedia.org/wiki/Darjeeling_tea', 'https://www.thespruceeats.com/tea-flushes-in-darjeeling-765194', 'https://www.seriouseats.com/why-you-should-drink-more-darjeeling-tea-what-is-first-flush'],

                'colorDescription' : 'varying based on how its brewed, from a golden yellow to orange to a deep red.',
                'tasteDescription' : 'musky-sweet tasting notes similar to muscat wine',
            },

            "lapsangsouchong" : {
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

            "dianhong" : {
                'name' : 'Dianhong Tea',
                'altnames' : 'Yunnan Red Tea',
                'image' : 'https://commons.wikimedia.org/wiki/File:GoldenDianHong.jpg#/media/File:GoldenDianHong.jpg',

                'origin' : 'Yunnan Province, China',
                'caffeine' : '20-40mg',

                'decription' : 'A relatively high-end, gourmet Chinese black tea sometimes used in various tea blends. The main difference between Dianhong and other Chinese black teas is the amount of fine leaf buds, or "golden tips," present in the dried tea.',

                'sources' : ['https://en.wikipedia.org/wiki/Dianhong'],

                'colorDescription' : 'golden orange',
                'tasteDescription' : 'sweet, floral, and honey-like, though tends to be stronger and more bitter than other red teas',
            },
        }
    },

    /*
        'name' : '',
        'altnames' : '',
        'image' : '',
                
        'origin' : '',
        'caffeine' : '',

        'description' : '',
        'colorDescription' : '',
        'tasteDescription' : '',

        'sources' : [''],
    */

    'green' : {
        'name': 'Green Tea',
        'image' : 'https://tea-api-boonaki.herokuapp.com/assets/green.jpg',
        'origin' : 'China',
        'caffeine' : '~10mg',
        'sources' : ['https://en.wikipedia.org/wiki/Green_tea'],
        'description' : 'Made from unoxidized leaves, Green tea is one of the least processed types of tea, offering high levels of antioxidants.',
        'colorDescription' : 'varying shades of green',
        'tasteDescription' : 'sweet, bittersweet, nutty, vegetal, buttery, floral, fruity, oceanic',
        'types' : {
            "sencha" : {
                'name' : 'Sencha Tea',
                'altnames' : 'Steeped Tea',
                'image' : 'https://commons.wikimedia.org/wiki/File:2017_Kagoshima_sencha.jpg#/media/File:2017_Kagoshima_sencha.jpg',
                
                'origin' : 'Japan',
                'caffeine' : '20-40mg',

                'description' : 'A Japanese green tea prepared by infusing whole tea leaves in hot water.',
                'colorDescription' : 'Light green',
                'tasteDescription' : 'fresh, herbal, or grassy flavor, which can have varying vegetal grassy notes depending on how long it is steeped.',

                'sources' : ['https://en.wikipedia.org/wiki/Sencha'],
            },
            "matcha" : {
                'name' : 'Matcha Tea',
                'altnames' : '',
                'image' : 'https://commons.wikimedia.org/wiki/File:Matcha_Scoop.jpg#/media/File:Matcha_Scoop.jpg',
                
                'origin' : 'China',
                'caffeine' : '20-90mg',

                'description' : 'A finely ground powder of specially grown and processed green tea leaves, traditionally consumed in East Asia.',
                'colorDescription' : 'Green, dark green',
                'tasteDescription' : 'vegetal grassy notes, natural sweet nuttiness, a touch of bitterness with a pleasant savory ending',

                'sources' : ['https://en.wikipedia.org/wiki/Matcha'],
            },
            "bancha" : {
                'name' : 'Bancha',
                'altnames' : '',
                'image' : 'https://commons.wikimedia.org/wiki/File:Shizuoka_bancha.jpg#/media/File:Shizuoka_bancha.jpg',
                
                'origin' : 'Japan',
                'caffeine' : '~10mg',

                'description' : 'Tea that is harvested from the same tea tree as sencha grade, but it is plucked later than sencha is. Can be found in a number of forms such as roasted, unroasted, smoked, etc.',
                'colorDescription' : 'Light green to green-orange',
                'tasteDescription' : 'mild, earthy grassiness, with dry, toasty notes with less of a deeply vegetal, umami flavo',

                'sources' : ['https://en.wikipedia.org/wiki/Bancha'],
            },
            "gyokuro" : {
                'name' : 'Gyokuro',
                'altnames' : 'Jade Dew, Pearl Dew',
                'image' : 'https://commons.wikimedia.org/wiki/File:Gyokuro_img_0067.jpg#/media/File:Gyokuro_img_0067.jpg',
                
                'origin' : 'Japan',
                'caffeine' : '~35mg',

                'description' : 'A type of shaded green tea from Japan. It differs from the standard sencha (a classic unshaded green tea) in being grown under the shade rather than the full sun.',
                'colorDescription' : 'ranging from light green to dark green',
                'tasteDescription' : 'very full-bodied, with a taste reminiscent to seaweed and grasses, followed by an intense sweetness',

                'sources' : ['https://en.wikipedia.org/wiki/Gyokuro'],
            },
            "kukicha" : {
                'name' : 'Kukicha',
                'altnames' : 'Bōcha, Twig tea, Stalk tea',
                'image' : 'https://commons.wikimedia.org/wiki/File:Kukicha.jpg#/media/File:Kukicha.jpg',
                
                'origin' : 'Japan',
                'caffeine' : '1-5mg',

                'description' : 'A Japanese blend made of stems, stalks, and twigs. It is available as a green tea or in more oxidised processing',
                'colorDescription' : 'very pale, yellow-green,',
                'tasteDescription' : 'mildly nutty and slightly creamy sweet flavour',

                'sources' : ['https://en.wikipedia.org/wiki/Kukicha'],
            },
            "konacha" : {
                'name' : 'Konacha',
                'altnames' : 'Gyokurokonacha',
                'image' : 'https://commons.wikimedia.org/wiki/File:Konacha.jpg#/media/File:Konacha.jpg',
                
                'origin' : 'Japan',
                'caffeine' : 'varied based on plant growth',

                'description' : 'A type of green tea, composed of the dust, tea buds and small leaves that are left behind after processing Gyokuro or Sencha',
                'colorDescription' : 'intense green, deep green',
                'tasteDescription' : 'mild, sweet, and grassy flavor with bitter after taste',

                'sources' : ['https://en.wikipedia.org/wiki/Konacha'],
            },
            "genmaicha" : {
                'name' : '',
                'altnames' : '',
                'image' : '',
                
                'origin' : '',
                'caffeine' : '',

                'description' : '',
                'colorDescription' : '',
                'tasteDescription' : '',

                'sources' : [''],
            },
            "hojicha" : {
                'name' : '',
                'altnames' : '',
                'image' : '',
                
                'origin' : '',
                'caffeine' : '',

                'description' : '',
                'colorDescription' : '',
                'tasteDescription' : '',

                'sources' : [''],
            },
            "fukamushi Sencha" : {
                'name' : '',
                'altnames' : '',
                'image' : '',
                
                'origin' : '',
                'caffeine' : '',

                'description' : '',
                'colorDescription' : '',
                'tasteDescription' : '',

                'sources' : [''],
            },
            "kabusecha" : {
                'name' : '',
                'altnames' : '',
                'image' : '',
                
                'origin' : '',
                'caffeine' : '',

                'description' : '',
                'colorDescription' : '',
                'tasteDescription' : '',

                'sources' : [''],
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
            "dahongpao" : {

            },
            "shuijingui" : {

            },
            "tieluohan" : {

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

    //HERBAL BLENDS - BLENDS WILL CONTAIN ALL KEYS + INGREDIENTS
    'blends' : {
        "earlgrey" : {
            'name' : 'Earl Grey',
            'altnames' : '',
            'image' : 'https://commons.wikimedia.org/wiki/File:Earl_Grey_Tea.jpg#/media/File:Earl_Grey_Tea.jpg',
            
            'origin' : 'UK*',
            'caffeine' : '40-120',
            'mainIngredients' : 'Black Tea, Oil of Bergamot',

            'description' : 'A tea blend which has been flavoured with oil of bergamot',
            'colorDescription' : 'Amber, deep orange',
            'tasteDescription' : 'smoky, earthy, spicy, nutty, citrus, caramel, leather, fruity, and honey',

            'sources' : ['https://en.wikipedia.org/wiki/Earl_Grey_tea'],
        },

        "ladygrey" : {
            'name' : 'Lady Grey',
            'altnames' : '',
            'image' : 'https://commons.wikimedia.org/wiki/File:TwiningsLadyGrey_low.jpg#/media/File:TwiningsLadyGrey_low.jpg',
            
            'origin' : 'UK*',
            'caffeine' : '25-110mg',
            'mainIngredients' : 'Black Tea, Oil of Bergamot, Lemon peel, Orange Peel',
    
            'description' : 'Lady Grey tea is a trademarked variation on Earl Grey tea. Like Earl Grey, it is a black tea flavoured with bergamot essential oil.',
            'colorDescription' : 'lighter amber, orange',
            'tasteDescription' : '',
    
            'sources' : ['https://en.wikipedia.org/wiki/Lady_Grey_(tea)'],
        },
        "englishbreakfast" : {
            'name' : 'English Breakfast',
            'altnames' : '',
        },
        "englishafternoon" : {
            'name' : 'English Afternoon',
            'altnames' : '',
        },
        "irishbreakfast" : {
            'name' : 'Irish Breakfast',
            'altnames' : '',
        },
        "masalachai" : {
            'name' : 'Masala Chai',
            'altnames' : '',
        },
        "russiancaravan" : {
            'name' : 'Russian Caravan',
            'altnames' : '',
        },
        "lycheeblackTea" : {
            'name' : 'Lychee Black Tea',
            'altnames' : '',
        },
        "sencha" : {

        },
        "matcha" : {

        },
        "shincha" : {

        },
        "bancha" : {

        },
        "gyokuro" : {

        },
        "kukicha" : {

        },
        "tencha" : {

        },
        "konacha" : {

        },
        "genmaicha" : {

        },
        "hojicha" : {

        },
        "fukamushi Sencha" : {

        },
        "kabusecha" : {

        }
    },

    // 'yellow' : {
    //     'name' : 'Yellow Tea',
    //     'caffeine' : 'time/temperature based',
    //     'origin' : 'East Asia',
    //     'description' : '',
    //     'colorDescription' : 'Light green or light yellow',
    //     'tasteDescription' : 'floral, fresh, fruity, with a hint of cucumber or melon.',
    //     'types' : {

    //     },
    // },

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