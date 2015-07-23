## Problem

There is no way to stop client uploading data even we pause the request stream `req.pause`

```js
var http = require('http');

var server = http.createServer(function(req, res) {
    console.log('request');
    req.pause();
    res.writeHead(403);
    res.end('hello\n');
});

server.listen(8081);
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <form action="http://localhost:8081/" method="POST" enctype="multipart/form-data">
        <input type="FILE" name="hel">
        <input type="SUBMIT">
    </form>
</body>
</html>
```

```bash
# create a large file
$ dd count=1 bs=1g if=/dev/zero of=large-file.txt
# serve html page
$ python -m SimpleHTTPServer 8082 .
# start node http server
$ node test.js
```

## Solution

The only way is to destory underlying socket, to give client a prompt, we should
send response first before close socket.

```js
var http = require('http');

var server = http.createServer(function(req, res) {
    console.log('request');
    res.writeHead(403);
    res.end('hello\n');
    res.on('finish', function() {
        console.log('finish');
        req.socket.destroy();
    });
});

server.listen(8081);
```

Note: Request and response can be send concurrently.
