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


var s22 = {

  "method": "GET",
  "url": "http://crm.lieluobo.testing/api/biz/project/cProjects?page=1&size=10&sort=createdAt%3Adesc&accountId=204641",
  "httpVersion": "HTTP/1.1",
  "headers": [
    {
      "name": "Accept-Encoding",
      "value": "gzip, deflate"
    },
    {
      "name": "X-B3-TraceId",
      "value": "a538c5071f9be38b"
    },
    {
      "name": "Accept-Language",
      "value": "zh-CN,zh;q=0.9"
    },
    {
      "name": "Authorization",
      "value": "884d77283c5140bd985d51c89a1cc54e"
    },
    {
      "name": "Cookie",
      "value": "_token=f5c1d064e7c64849a08e9ea2b57baa8d; _role=llbc; bi_token=ec3bb11cf7be42d695aef83bd7694cfc; _channel=crmc; bms_token=884d77283c5140bd985d51c89a1cc54e"
    },
    {
      "name": "Connection",
      "value": "keep-alive"
    },
    {
      "name": "channel",
      "value": "crmc"
    },
    {
      "name": "Pragma",
      "value": "no-cache"
    },
    {
      "name": "Host",
      "value": "crm.lieluobo.testing"
    },
    {
      "name": "author",
      "value": "haolie"
    },
    {
      "name": "User-Agent",
      "value": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.146 Safari/537.36"
    },
    {
      "name": "Accept",
      "value": "application/json, text/plain, */*"
    },
    {
      "name": "Cache-Control",
      "value": "no-cache"
    },
    {
      "name": "X-B3-SpanId",
      "value": "a538c5071f9be38b"
    },
    {
      "name": "Referer",
      "value": "http://crm.lieluobo.testing/account/detail/204641"
    },
    {
      "name": "X-B3-Sampled",
      "value": "1"
    }
  ],
  "queryString": [
    {
      "name": "page",
      "value": "1"
    },
    {
      "name": "size",
      "value": "10"
    },
    {
      "name": "sort",
      "value": "createdAt%3Adesc"
    },
    {
      "name": "accountId",
      "value": "204641"
    }
  ],
  "cookies": [
    {
      "name": "_token",
      "value": "f5c1d064e7c64849a08e9ea2b57baa8d",
      "expires": null,
      "httpOnly": false,
      "secure": false
    },
    {
      "name": "_role",
      "value": "llbc",
      "expires": null,
      "httpOnly": false,
      "secure": false
    },
    {
      "name": "bi_token",
      "value": "ec3bb11cf7be42d695aef83bd7694cfc",
      "expires": null,
      "httpOnly": false,
      "secure": false
    },
    {
      "name": "_channel",
      "value": "crmc",
      "expires": null,
      "httpOnly": false,
      "secure": false
    },
    {
      "name": "bms_token",
      "value": "884d77283c5140bd985d51c89a1cc54e",
      "expires": null,
      "httpOnly": false,
      "secure": false
    }
  ],
  "headersSize": 816,
  "bodySize": 0
}

s22.response=s
console.log("-----------")

var snippet = new HTTPSnippet2(s22)

//console.log(snippet.convert('python', "requestMini"))
console.log(snippet.convert('python', "simple"))



