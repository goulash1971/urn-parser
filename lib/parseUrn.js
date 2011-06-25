// parseUrn (based upon parseUri 1.2.2)
// (c) Steven Levithan <stevenlevithan.com>
// MIT License

function parseUrn (str, mode) {
	var	o   = parseUrn.options;
	if (mode === undefined) mode = (o.strictMode ? "strict" : "loose");
	var	m   = o.parser[mode].exec(str),
	    k   = o.keys[mode],
	    urn = {protocol: "urn"},
	    i   = k.length;
	
	while (i--) urn[k[i]] = m[i] || "";
	
	return urn;
};

parseUrn.options = {
	strictMode: false,
	keys: {
		strict: ["source","namespace","specification"],
		loose:  ["source","protocol","namespace","specification"]
	},
	parser: {
		strict: /^(?:u|U)(?:r|R)(?:n|N):((?:[a-z][a-z]+)):(([\w#!:.?+=&%@!\-\/])+)?/,
		loose:  /^((?:[a-z][a-z]+)):((?:[a-z][a-z]+)):(([\w#!:.?+=&%@!\-\/])+)?/
	}
};

module.exports = parseUrn;