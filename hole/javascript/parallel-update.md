## Problem

With serialized JSON data store in relational database (for future extensibility),
parallel request have unexpected result.

```js
'use strict';

var table = [{
    jsonField: '{"key": ["value"]}',
}]

/*
 * Server side
 */

function getData() {
    return new Promise((resolve) => {
        // database latency
        setTimeout(() => {
            resolve(JSON.parse(table[0].jsonField))
        }, 10)
    })
}

function updateData(data, val) {
    return new Promise((resolve) => {
        // database latency
        setTimeout(() => {
            data.key.push(val);
            resolve(table[0].jsonField = JSON.stringify(data))
        }, 10)
    })
}

// request handler
function handler(val) {
    return getData().then((data) => updateData(data, val))
}


/*
 * Client side
 */

function request(val) {
    // 90 ~ 110
    let latency = Math.floor(Math.random() * 20) + 90
    return new Promise((resolve) => {
        // network latency
        setTimeout(() => {
            // we can think HTTP request as RPC!
            handler(val).then(resolve)
        }, latency)
    })
}


/**
 * Tests
 */

function parallel() {
    let requests = []
    for (let index = 0; index < 3; index++) {
        requests.push(request('value' + index))
    }

    Promise.all(requests)
        .then(() => getData())
        .then(log)
}

function series() {
    let promise = Promise.resolve()

    for (let index = 0; index < 3; index++) {
        promise = promise.then(() => request('value' + index))
    }

    promise.then(() => getData()).then(log)
}

function log(data) {
    console.log(data)
}


// Expected: { key: [ 'value', 'value0', 'value1', 'value2' ] }
// Got: { key: [ 'value', 'value2' ] } or other random result!
parallel()
//series()
```

## Solution

There are two solution

1. series request api
2. Use NoSQL database instead of relational database
