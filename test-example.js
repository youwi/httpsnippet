var HTTPSnippet2 = require('./src/index');

var snippet = new HTTPSnippet2({
  method: 'GET',
  url: 'http://mockbin.com/request'
})

console.log(snippet.convert('python', "requests"))
console.log(snippet.convert('python', "requestsMini"))

//console.log(snippet.convert('javascript'))


require('./dist/httpsnippet-dist-node');

snippet = new HTTPSnippet({
  method: 'GET',
  url: 'http://mockbin.com/request'
})

console.log(snippet.convert('python', "requests"))
//console.log(snippet.convert('javascript'))


var s = {
  "method": "POST",
  "url": "http://bi.api.lieluobo.testing/action",
  "httpVersion": "HTTP/1.1",
  "headers": [
    {
      "name": "Pragma",
      "value": "no-cache"
    },
    {
      "name": "Origin",
      "value": "http://www.lieluobo.testing"
    },
    {
      "name": "Accept-Encoding",
      "value": "gzip, deflate"
    },
    {
      "name": "Host",
      "value": "bi.api.lieluobo.testing"
    },
    {
      "name": "Accept-Language",
      "value": "zh-CN,zh;q=0.9"
    },
    {
      "name": "User-Agent",
      "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
    },
    {
      "name": "Content-Type",
      "value": "text/plain"
    },
    {
      "name": "Accept",
      "value": "*/*"
    },
    {
      "name": "Cache-Control",
      "value": "no-cache"
    },
    {
      "name": "Referer",
      "value": "http://www.lieluobo.testing/resumes"
    },
    {
      "name": "Connection",
      "value": "keep-alive"
    },
    {
      "name": "Content-Length",
      "value": "416"
    }
  ],
  "queryString": [],
  "cookies": [],
  "headersSize": 464,
  "bodySize": 382,
  "postData": {
    "mimeType": "text/plain",
    "text": "[{\"action\":\"click_c_resume_group_all\",\"actionName\":\"点击我的候选人\",\"type\":\"click\",\"userId\":204641,\"path\":\"/resumes\",\"title\":\"我的候选人\",\"channel\":\"c\",\"url\":\"http://www.lieluobo.testing/resumes\",\"timeAt\":1516257045108,\"version\":\"2.6.0\",\"deviceId\":\"1da7329f-1aeb-18f1-bc8d-a22d19c8b476\",\"sessionId\":\"91e9f72b-2b9a-91b7-530e-51e1b3950c22\",\"content\":\"{}\",\"module\":\"Resumes\",\"moduleName\":\"我的候选人\"}]"
  }
}


var snippet = new HTTPSnippet2(s)

console.log(snippet.convert('python', "requestMini"))
