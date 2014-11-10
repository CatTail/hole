## Problem

Numberic array sort result is surprising

```javascript
var arr = [1, 2, 10];
arr.sort(); // [1, 10, 2]
```

## Solution

WTF

```javascript
var arr = [1, 2, 10];
arr.sort(function(a, b) {return a-b; })
```

## References

  * [Array.sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
