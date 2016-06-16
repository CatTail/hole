## Question

Initialize an array with fixed length don't work with `Array.prototype.map`,

```js
var arr = new Array(3)
var range = arr.map((_, index) => index) // [ , , ]
```

## Solution

> map() skips holes, but preserves them, which is why an empty array (with only holes) does not work for us

A little help from `Function.prototype.apply` do the magic,

```js
var arr = Array.apply(null, new Array(3))
var range = arr.map((_, index) => index) // [0, 1, 2]
```


## Referrences

* [Array iteration and holes in JavaScript](http://www.2ality.com/2013/07/array-iteration-holes.html)
* [Initializing an array with values](http://www.2ality.com/2013/11/initializing-arrays.html)
