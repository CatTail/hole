## Problem

```js
var promise = Promise.resolve()

var data = {
    key1: 'value1',
    key2: 'value2',
}
for (var name in data) {
    promise = promise.then(() => process(data[name])).then(log)
}

function process(val) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(val)
        }, 10)
    })
}

function log(val) {
    console.log(val)
}

// Expected: value1, value2
// Got: value2, value2
```



## Solution

Manually

```js
var promise = Promise.resolve()

var data = {
    key1: 'value1',
    key2: 'value2',
}
for (var name in data) {
    ((name) => {
        promise = promise.then(() => process(data[name])).then(log)
    })(name)
}

function process(val) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(val)
        }, 10)
    })
}

function log(val) {
    console.log(val)
}
```



Or with ES6 `let`

```js
'use strict';

var promise = Promise.resolve()

var data = {
    key1: 'value1',
    key2: 'value2',
}
for (let name in data) {
    promise = promise.then(() => process(data[name])).then(log)
}

function process(val) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(val)
        }, 10)
    })
}

function log(val) {
    console.log(val)
}
```

