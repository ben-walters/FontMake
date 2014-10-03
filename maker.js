var fs = require('fs'),
	glob = require('glob'),
	src = process.argv[2] || './*.ttf',
	dest = process.argv[3] || '.',
	path = process.argv[4] || '.',
	out = '';

glob(src + '/*.ttf', function (er, files) {
  console.log(files);

	if(files.length==0) {
		return console.log('No Files found.')
	}

	for (var i=0;i<files.length;i++) {

		if(files[i].indexOf('.ttf')<0) {
			return console.log('File not valid')
		}

		var tmp = files[i].split('/');
		var file = tmp[tmp.length-1].replace('.ttf','')
		var font = path + '/' + file;

		out += '@font-face {\n'
		out += '    font-family: "' + file + '";\n'
		out += '    src: url("' + font + '.eot");\n'
		out += '    src: url("' + font + '.eot?#iefix") format("embedded-opentype"),\n'
		out += '    url("' + font + '.svg#' + file + '") format("svg"),\n'
		out += '    url("' + font + '.woff") format("woff"),\n'
		out += '    url("' + font + '.ttf") format("truetype");\n'
		out += '    font-weight: normal;\n'
		out += '    font-style: normal;\n'
		out += '}\n'
	}

	fs.writeFile(dest + '/font-file.css', out, function(err) {
	    if(err) {
	        console.log(err);
	    } else {
	        console.log('File written at: ' + dest + '/font-file.css');
	    }
	});




})

/*

for (var i=0;i<f.length;i++) {
	var font = f[i]

	out += '@font-face {\n'
out += '    font-family: "' + font + '";\n'
out += '    src: url("' + font + '.eot");\n'
out += '    src: url("' + font + '.eot?#iefix") format("embedded-opentype"),\n'
out += '    url("' + font + '.svg#' + font + '") format("svg"),\n'
out += '    url("' + font + '.woff") format("woff"),\n'
out += '    url("' + font + '.ttf") format("truetype");\n'
out += '    font-weight: normal;\n'
out += '    font-style: normal;\n'
out += '}\n'
}

fs.writeFile("font-file.css", out, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 
*/
