

var HTTPSnippet = require('index');


var snippet = new HTTPSnippet({
  method: 'GET',
  url: 'http://mockbin.com/request'
});

console.log(snippet.convert('node'));
