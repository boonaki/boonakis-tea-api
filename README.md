# a free, open-source API for tea!
This is a free tea database that gives simple information about various teas and their types. A majority of the information gathered comes from https://www.wikipedia.org

- **Access it here:** https://boonakitea.up.railway.app/
- **See it in action!** https://justteas.herokuapp.com

<p>
 Teas will contain the following information:
</p>


- Name
- Alternate names
- Origin
- Image
- Caffeiene Content (per 1 cup/8floz)
- Caffeine Levels (none/very low/low/moderate/high/very high/varied)
- Type or types
- Quick description
- Taste description
- Color description
- If tea is a blend, then data will include main ingredients
- Any sources used

## How to use:

<p>In this database, their are two main objects inside of the data being sent</p>
<p>1. An organized list of the teas with teas sorted by types and nested within their main types object</p>
<p>2. An unorganized list of all of the teas in the database</p>
<p>To access the organized list, use the url: https://tea-api-boonaki.herokuapp.com/api/teas</p>
<p>To access the un-organized list, use the url: https://tea-api-boonaki.herokuapp.com/api/all</p>
<p>To query the database for individual teas, use the url: https://tea-api-boonaki.herokuapp.com/api/teas/[teaname]</p>

<p>All specified endpoints will return an object</p>

**For example:** https://boonakitea.up.railway.app/api/teas/earlgrey will return the following object:
     
```
"earlgrey" : {
    'name' : 'Earl Grey',
    'altnames' : '',
    'image' : '(image-url)',
    'origin' : 'UK*',
    'type' : 'blend',
    'caffeine' : '40-120mg',
    'caffeineLevel' : 'very high',
    'mainIngredients' : 'black tea, oil of bergamot',
    'description' : 'A tea blend which has been flavoured with oil of bergamot',
    'colorDescription' : 'amber, deep orange',
    'tasteDescription' : 'smoky, earthy, spicy, nutty, citrus, caramel, leather, fruity, and honey',
    'sources' : ['https://en.wikipedia.org/wiki/Earl_Grey_tea'],
},
```

## Other Projects:

**The TeaDB:** https://github.com/boonaki/tea-database

**NASA APOD App:** https://github.com/boonaki/nasaAPODapp

**Square Tag:** https://github.com/boonaki/squaretag
