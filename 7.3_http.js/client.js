const http = require("http");

function startGetRequest() {
    var req = http.request({ hostname: '127.0.0.1', port: 9600, path:'/path1', method: 'GET' }, (res) => {
        let statusCode = res.statusCode;
        console.log(`statusCode:${statusCode}`);
        let headers = res.headers;
        console.log(`headers:${JSON.stringify(headers)}`);
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log(chunk)
        })
    });
    req.end();
}

function startPostRequest() {
    let req = http.request({ hostname: '127.0.0.1', port: 9600, path:'/url2', method: 'POST' }, (res) => {
        let statusCode = res.statusCode;
        console.log(`statusCode:${statusCode}`);
        let headers = res.headers;
        console.log(`headers:${JSON.stringify(headers)}`);
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log(chunk);
        })
    });
    let data = { a: 1 }
    req.write(new Buffer(JSON.stringify(data), 'utf8'), () => {
        console.log('向报文体中写入数据')
    })
    req.end();
}

startGetRequest();
// startPostRequest();