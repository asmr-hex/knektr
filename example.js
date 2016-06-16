require("babel-polyfill");
var KNEKTR = require('./build/knektr.core.js').KNEKTR;

var knektr = new KNEKTR();

console.log(knektr.graphs.get('default'));
