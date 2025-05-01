const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Set up handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// set up static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    // res.send(
    //     '<h1>Weather</h1>'
    //     + '<form action="/weather" method="get">'
    //     + '<input type="text" name="address" placeholder="Address" />'
    //     + '<input type="submit" value="Search" />'
    //     + '</form>'
    // );

    res.render('index', {
        title: 'Weather',
        name: 'Chaitanya'
    });
}
);

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Chaitanya',
        helpText: 'This is some helpful text.'
    });
}
);

app.get('/weather', (req, res) => {
    const address = req.query.address;
    console.log('Address:', address);
    if (!address) {
        return res.send({
            error: 'You must provide an address.'
        });
    }
    const geocode = require('./utils/geocode');
    const forecast = require('./utils/forecast');

    geocode(address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.send({
                error: 'Unable to find location. Try another search.'
            });
        }
        forecast(latitude, longitude, (error, {weather_descriptions, temperature, precip} = {}) => {
            if (error) {
                return res.send({
                    error: 'Unable to find weather. Try another search.'
                });
            }
            res.send({
                forecast: weather_descriptions + ". It is currently " + temperature + " degrees out.",
                location: location,
                address: address,
                precip: precip
            });
        });
    }
    );
   
}
);

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Chaitanya',
        errorMessage: 'Help article not found.'
    });
}
);

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Chaitanya',
        errorMessage: 'Page not foundcdd.'
    });
}
);

app.listen(3002, () => {    
    console.log('Server is up on port 3001.');
}
);