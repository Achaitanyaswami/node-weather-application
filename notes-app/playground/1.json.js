const fs = require('fs');

const string = fs.readFileSync('1-json.json').toString();
const json = JSON.parse(string);

json.name = 'Sidhany';
json.age = 300;
const jsonString = JSON.stringify(json);
fs.writeFileSync('1-json.json', jsonString);
console.log(jsonString);
