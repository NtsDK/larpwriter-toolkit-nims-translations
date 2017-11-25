var R = require('ramda');
var fs = require('fs');
var path = require('path');  

var dirName = 'vtmcl\\srcfiles\\';

//filePath = path.join(__dirname, 'start.html');
var files = ['archetypes', 'backgrounds', 'clans', 'disciplines', 'paths'];
var langs = ['en','ru'];
var makeKey = str => str.toLowerCase().split(' ').join('_').replace('-','_');

var result = files.reduce((acc, fileName) => {
    var filePath = dirName + fileName + '.txt';
    var data = fs.readFileSync(filePath, {encoding: 'utf-8'});
//    console.log('received data: ' + data);
//    console.log(R.splitEvery(3,data.split('\n').map(R.trim)));
    var values = R.splitEvery(3,data.split('\n').map(R.trim));
//var makeKey = str => str.toLowerCase().split(' ').join('_');
    var keys = values.map(R.nth(0)).map(makeKey);
    
//    console.log(keys);
    var objs = R.range(0, values[0].length-1).map(val => R.zipObj(keys, values.map(R.nth(val))));
    acc[fileName] = objs;
    return acc;
//    console.log(objs);
}, {})

console.log(result);

var result2 = langs.forEach((lang,i) => {
    var langData = R.mapObjIndexed((val) => {
        return val[i];
    }, result);
    var filePath = dirName + lang + '.json';
    fs.writeFileSync(filePath, JSON.stringify(langData, null, '  '), {encoding: 'utf-8'});
})

//console.log(result2);

//console.log(R.splitEvery(3,data.split('\n').map(R.trim)).map(el => {
//    return el[1] + '\n' + el[0] + '\n'
//}).join('\n'));

