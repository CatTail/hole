## Question

Exception from asynchronous function can't be try/catch from outside

```js
try {
    doSomething()
} catch (err) {
    console.log('I caught you')
}

function doSomething() {
    setTimeout(() => {
        throw new Error('Oops')
    })
}
```

## Solution

Asynchrounous function in Javascript execute **in a different call stack** with
outside function. We can use callback and promise passing error around

Callback

```js
doSomething((err) => {
    if (err) {
        console.log('I caught you')
    }
})
function doSomething(callback) {
    setTimeout(() => {
        callback(new Error('Oops'))
    })
}
```

Promise

```js
doSomething().catch((err) => {
    console.log('I caught you')
})

function doSomething() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Oops'))
        })
    })
}
```
