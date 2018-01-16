var HTTPSnippet = require('./src/index');

var snippet = new HTTPSnippet({
  method: 'GET',
  url: 'http://mockbin.com/request'
})

console.log(snippet.convert('python',"python3"))
console.log(snippet.convert('javascript'))
