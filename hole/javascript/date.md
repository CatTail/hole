## Problem

```javascript
var date = new Date(2014, 12, 1); // 2013-01-01
```

Surprisely, the result of `date` is `2013-01-01`.

## Solution

Official documentation said the month parameter

> beginning with 0 for January to 11 for December.

So we have to manually decrease it by 1. WTF

```javascript
var date = new Date(2014, 12 - 1, 1);
```

## Referrences

[MDN date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
