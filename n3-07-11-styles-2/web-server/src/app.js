const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');
const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Mehul Chaturvedi'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Mehul Chaturvedi'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Mehul Chaturvedi'
    })
})

app.get('/weather', (req, res) => {
    console.log(req.query);
    if (!req.query) {
        return res.send({
            error: "You must provide an address"
        });
    }

    geocode(req.query.address, (error, {lattitude, longitude, location})=>{
        if (error) {
            return res.send({error})
        }

        forecast(lattitude,longitude,(error, forcastedData)=>{
            if (error) {
                res.send({error})
            }else{
                res.send({
                    forcast: forcastedData,
                    location,
                    address:req.query.address
                })
            }
        });

        
    });

    // res.send({
    //     forecast: 'It is snowing',
    //     location: 'Philadelphia'
    // })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Mehul Chaturvedi',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Mehul Chaturvedi',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})