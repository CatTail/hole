### Question

重复匹配组 (repeating a capturing group) 不能获得重复的匹配组, 而只能获得最后一个匹配的组.

```js
var src = '!123abc!';
var reg = /(123|abc)+/g;
reg.exec(src); // 返回 [ '123abc', 'abc', index: 0, input: '!123abc!' ], 希望的结果 ['123abc', '123', 'abc', index: 0, input: '!123abc!']
reg.exec(src); // 返回 null
```

### Solution

有些语言并不支持重复匹配组, 而只支持匹配重复组 (capturing a repeated group), 如

```js
var src = '!123abc!';
var reg = /((?:123|abc)+)/g;
reg.exec(src); // 返回 [ '123abc', '123abc', index: 1, input: '!123abc!' ]
```

但是可以通过多次匹配解决这个问题

```js
var src = '!123abc!';
var reg = /(?:123|abc)+/g;
var subreg = /(123|abc)/g
var match = reg.exec(src); // 返回 [ '123abc', index: 1, input: '!123abc!' ]
subreg.exec(match[0]); // 返回 [ '123', '123', index: 0, input: '123abc' ]
subreg.exec(match[0]); // 返回 [ 'abc', 'abc', index: 3, input: '123abc' ]
```

### References

  * [Repeating a Capturing Group vs. Capturing a Repeated Group](http://www.regular-expressions.info/captureall.html)
