#! /usr/bin/env node
var argv = require('minimist')(process.argv.slice(2));
var createMiniHarp = require('mini-harp'), app = createMiniHarp();
var port = argv.port||4000;
console.log('Starting mini-harp on http://localhost:'+port);
app.listen(port);
