const request = require('request');


const forecast = (latitude, longitude, callback) => {
    const accessKey = 'fba044d1ef185f4531ebbeacee09cee1';
    const weatherURL = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${latitude},${longitude}&units=f`;
    request({ url: weatherURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (response.body.error) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            const data = response.body.current;
            callback(undefined, {
                temperature: data.temperature,
                weather_descriptions: data.weather_descriptions[0],
                precip: data.precip
            });
        }
    });
}

module.exports = forecast;
