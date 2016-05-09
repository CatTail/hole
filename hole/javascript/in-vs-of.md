## Question

在 Javascript 中, `in` 检索对象的键 (key), 但是在 CoffeeScript 中, `in` 检索元素
是否在数组中.

事实上, Coffee 中的 `of` 和 JS 中的 `in` 是等价的

```coffee
# test whether browser support touch event
if 'ontouchstart' in window
  # do stuff
  stuff() # won't being called
```

## Solution
 
```coffee
# using keyword `of` instead
if 'ontouchstart' of window
  stuff()
```

## References

  * [simplest-way-to-check-if-key-exists-in-object-using-coffeescript](http://stackoverflow.com/questions/8242984/simplest-way-to-check-if-key-exists-in-object-using-coffeescript)
