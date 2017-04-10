


var exec = require('child_process').exec, child;

child = exec('node mapmaker.js',
	function (error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if (error !== null) {
			console.log('exec error: ' + error);
		}
	});




//issues: 1   -   can execute commands, but having trouble   2    -    need to test/play around with it to understand it, but can't find any good examples.