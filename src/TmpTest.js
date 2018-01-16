

var HTTPSnippet = require('./index.js');


var snippet = new HTTPSnippet({
  method: 'GET',
  url: 'http://mockbin.com/request'
});

console.log(snippet.convert('python'))
console.log(snippet.convert('javascript'));
console.log(snippet.convert('curl'));
console.log(snippet.convert('shell'));
console.log(snippet.convert('c'));





require('util').format("");
