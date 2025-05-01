const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const process = require('process');
const args = process.argv.slice(2);

const search = args[0];
if (!search) {
    console.log("Please provide a location.");
    process.exit(1);
}
console.log("Searching for:", search);

geocode(search, (error, {latitude, longitude, location} = {}) => {
    if (error) {
        return console.log(error);
    }
    forecast(latitude, longitude, (error, {weather_descriptions, temperature, precip} = {}) => {
        if (error) {
            return console.log(error);
        }
        console.log(location);
        console.log(weather_descriptions + ". It is currently " + temperature + " degrees out.");
        console.log("There is a " + precip + "% chance of rain.");
    });
}
);