var HTTPSnippet2 = require('./src/index');

var snippet = new HTTPSnippet2({
  method: 'GET',
  url: 'http://mockbin.com/request'
})

console.log(snippet.convert('python',"python3"))
console.log(snippet.convert('javascript'))



require('./dist/httpsnippet-dist-node');

 snippet = new HTTPSnippet({
  method: 'GET',
  url: 'http://mockbin.com/request'
})

console.log(snippet.convert('python',"python3"))
console.log(snippet.convert('javascript'))
