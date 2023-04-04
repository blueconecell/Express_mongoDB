const fs = require('fs');

const jsonFile = fs.readFileSync('data.json', 'utf8');
const jsonData = JSON.parse(jsonFile);
const a = JSON.stringify(jsonData);
const b = JSON.parse(a);
const c = JSON.stringify(b.results.trackmatches) 
const d = JSON.parse(c);
console.log(d.track[0]);