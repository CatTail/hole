## Question

Use `||` to dectect undefined variable will cause RefereceError exception.

```
var global = exports || window;
```

## Solution

Use `typeof` operator instead

```
var global = typeof exports === 'undefined' ? window : exports;
```
