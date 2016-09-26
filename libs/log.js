var colors = require('colors');

var endl = '\r\n';
var prefix = '[fanli generator]'.green + ' - '.green + Date.now().toString() + ' ';

exports.log = function(content) {
    process.stdout.write(prefix + content + endl);
};
