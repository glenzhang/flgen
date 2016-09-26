var vfs = require('vinyl-fs');
var fs = require('fs');
var path = require('path');
var through = require('through2');
var log = require('./log').log;
var runCmd = require('./runcmd').runCmd;

function init(name, type) {
    if (!type) {
        type = 'react';
    }

    copyFiles(name, type);
}

function copyFiles(name, type) {
    var cwd = path.join(__dirname, '../boilerplate', type);
    var dest = path.resolve(process.cwd(), name);

    vfs.src('**/*', {
            cwd: cwd,
            cwdbase: true,
            dot: true,
            dirMode: true
        })
        .pipe(template())
        .pipe(vfs.dest(dest))
        .on('end', function() {
            log(type.cyan + ' bolierplate build finished'.cyan);
            process.stdout.write('\r\n');
            process.stdout.write('cd ' + name + ' && npm install');
            process.stdout.write('\r\n');
        })
        .resume();

    function template() {
        return through.obj(function(file, enc, cb) {
            log(file.relative.grey);
            this.push(file);
            cb();
        });
    }
}

exports.init = init;
