## Question

Arguments behaviour changes in strict mode

Override argument without strict mode

```js
function original(data) {
    return data
}

function decorate(data) {
    data = 'other'
    return original.apply(null, arguments)
}

console.log(decorate('this')) // 'other'
```

Override argument with strict mode

```js
'use strict'

function original(data) {
    return data
}

function decorate(data) {
    data = 'other'
    return original.apply(null, arguments)
}

console.log(decorate('this')) // 'this'
```

## Solution

[Strict Mode](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Strict_mode) explain what happens, I want to show more example here.

Override argument via temporary variable without strict mode

```js
function original(data) {
    return data
}

function decorate(data) {
    var tmp = data
    tmp = 'other'
    return original.apply(null, arguments)
}

console.log(decorate('this')) // 'this'
```

Modify object argument via temporary argument without strict mode

```js
function original(data) {
    return data
}

function decorate(data) {
    var tmp = data
    tmp.key = 'other'
    return original.apply(null, arguments)
}

console.log(decorate({key: 'this'})) // {key: 'other'}
```

Modify object argument in strict mode

```js
'use strict'

function original(data) {
    return data
}

function decorate(data) {
    data.key = 'other'
    return original.apply(null, arguments)
}

console.log(decorate({key: 'this'})) // {key: 'other'}
```

Override object argument in strict mode

```js
'use strict'

function original(data) {
    return data
}

function decorate(data) {
    data = {key:'other'}
    return original.apply(null, arguments)
}

console.log(decorate({key: 'this'})) // {key: 'this'}
```



## Referrences

[Strict Mode](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Strict_mode)