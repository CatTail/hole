## Question

Why global `this` will equal to `module.exports` while in interactive node, `this` equal to `global` and not equal to `module.exports`

Interactive node

```
> this == global
true
> this == module.exports
false
```

Module orgnize as file

```javascript
console.log(this == module.exports); // true
console.log(this == global); // false
```
Why global `this` will equal to `module.exports` while in interactive node, `this` equal to `global` and not equal to `module.exports`

Interactive node

```
> this == global
true
> this == module.exports
false
```

Module orgnize as file

```javascript
console.log(this == module.exports); // true
console.log(this == global); // false
```

## Solution

There is no official documentation, but take a close look at source code, you will find the answer.

[source](https://github.com/joyent/node/blob/v0.11.9/lib/module.js#L449)

```javascript
Module.prototype._compile = function(content, filename) {
    ...
    var args = [self.exports, require, self, filename, dirname];
    return compiledWrapper.apply(self.exports, args);
};
```

while `module._compile` in invoke by `NativeModule` [source](https://github.com/joyent/node/blob/v0.11.9/src/node.js#L649)
