/**
 * @description
 * HTTP code snippet generator for Python using Requests
 *
 * @author
 * @montanaflynn
 *
 * for any questions or issues regarding the generated code snippet, please open an issue mentioning the author.
 */

'use strict'
var util = require("../../helpers/util");

var CodeBuilder = require('../../helpers/code-builder')

module.exports = function (source, options) {
  // Start snippet
  var code = new CodeBuilder('    ')

  // Import requests
  // code.push('from Suites.HttpClient import HttpClient')
  //     .blank()
  // code.push('def test_at(time):')
  //   .blank()


  // Set URL URL_BASE_CRM + SwaggerURL.bind("/specialEvent/copy/1")
  // code.push('url = BASE_URL + SwaggerURL.bind("%s")', source.url)
  //     .blank()

  // Construct query string
  if (source.queryString.length) {
    var qs = 'data = ' + JSON.stringify(source.queryObj, null, 4)

    code.push(qs)
      .blank()
  }

  // Construct payload
  var payload = JSON.stringify(source.postData.text)
  var jsonData = parsedText(source.postData.text)

  if (payload) {
    code.push('json = %s', jsonData)
  }

  // Construct headers
  var header
  var headers = source.allHeaders
  var headerCount = Object.keys(headers).length

  if (headerCount === 1) {
    for (header in headers) {
      code.push('headers = {\'%s\': \'%s\'}', header, headers[header])
        .blank()
    }
  } else if (headerCount > 1) {
    // var count = 1
    //
    // code.push('headers = LOGIN_HEADERS')
    //
    // for (header in headers) {
    //   if (count++ !== headerCount) {
    //     code.push(1, '\'%s\': "%s",', header, headers[header])
    //   } else {
    //     code.push(1, '\'%s\': "%s"', header, headers[header])
    //   }
    // }
    //
    // code.push(1, '}')
    //     .blank()
  }

  // Construct request
  var method = source.method

  var request = util.format('json = %s("%s", data)', method.toLocaleUpperCase(), source.url)


  if (headerCount > 0) {
    //  request += ', headers=headers'
  }

  if (qs) {
    //  request += ', params=querystring'
  }

  //request += ')'

  code.push(request)
    .blank()

    // Print response
    .push('jsonContain(json,{"code": 0,"msg":"OK"})')
    .blank()


  if (source.response) {
    if (String === source.response.constructor)
      code.push("# response example:"+source.response)
    else
      code.push("# response example:"+JSON.stringify(source.response))
  }

  return code.join()
}

module.exports.info = {
  key: 'requests',
  title: 'Requests',
  link: 'http://docs.python-requests.org/en/latest/api/#requests.request',
  description: 'Requests HTTP library'
}

// response = requests.request("POST", url, data=payload, headers=headers, params=querystring)
function parsedText(text) {
  try {
    if (text != null) {
      return JSON.stringify(JSON.parse(text), 0, 4)
    }
  } catch (e) {
    return text
  }
}
