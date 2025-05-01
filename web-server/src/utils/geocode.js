const request = require('request');

const geocode = (search, callback) => {
    const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=pk.eyJ1IjoiY2hhaXRhbnlhczA4MiIsImEiOiJjbGp4dnQwenMwYWY0NHBuMWNkZW9qb3prIn0.1p4TYy6NLhji9IVXz3pcpg&limit=1`;
    request({ url: geocodeURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            const data = response.body.features[0];
            callback(undefined, {
                latitude: data.center[1],
                longitude: data.center[0],
                location: data.place_name
            });
        }
    });
}

module.exports = geocode;