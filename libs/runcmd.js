var which = require('which');

function runCmd(cmd, args, fn) {
  args = args || [];

  var runner = require('child_process').spawn(which.sync(cmd), args, {
    // keep color
    stdio: "inherit"
  });

  runner.on('close', function (code) {
    if (fn) {
      fn(code);
    }
  });

}

exports.runCmd = runCmd;