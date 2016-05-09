## Question

With an given image `src.png`, decode content with UTF8 and encode with UTF8(In Nodejs)

```js
var fs = require('fs');
var content = fs.readFileSync('src.png', 'utf8');
fs.writeFileSync('dest.png', content, 'utf8');
```

`src.png` and `dest.png` are different

## Solution

In short, arbitary binary data contain invalid UTF8 values, in the process of encode and decode, data is altered.

Simple way to read and write image should preserve binary data,

```js
var fs = require('fs');
var content = fs.readFileSync('src.png');
fs.writeFileSync('dest.png', content);
```

And, `base64` is a safe way to convert binary data to readable string.

## Referrence

* [Hazards of Converting Binary Data To A String](http://haacked.com/archive/2012/01/30/hazards-of-converting-binary-data-to-a-string.aspx/)
