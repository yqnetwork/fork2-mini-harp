#! /usr/bin/env node
var argv = require('minimist')(process.argv.slice(2));
var root = argv._[0]||process.cwd();
var port = argv.port||4000;

var miniHarp = require('mini-harp'), app = miniHarp(root);
console.log('Starting mini-harp on http://localhost:'+port);
app.listen(port);
