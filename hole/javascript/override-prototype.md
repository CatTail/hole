## Problem

`obj.constructor.name` is not the class create `obj`

```js
function ClassName() {

}

ClassName.prototype = {
    key: 'value'
};

var obj = new ClassName();
console.log(obj.constructor.name); // => Object
```

## Solution

`obj.constructor` equals to

```js
{ key: 'value' }.constructor
```

which is `Object`

Because we override `ClassName.prototype`, there is no way to find `ClassName` by `obj`.

```js
function ClassName() {

}

ClassName.prototype.key = 'value';

var obj = new ClassName();
console.log(obj.constructor.name); // => ClassName
```
