## Question

在 CoffeeScript 类定义体中, 可以使用`@`引用构造函数, 但是在实例方法和静态方法中
却不行

下面是一个类名很长的类, 同时在很多地方需要引用这个类

```coffee
class $veryveryverylonglonglongClassName
  # factory method
  @create: ->
    new $veryveryverylonglonglongClassName

  getConstructor: ->
    $veryveryverylonglonglongClassName
```

## Solution

使用下面方法在静态方法和实例方法中引用构造函数

```js
class first.second.third.longlonglongClassName
  Ctor = @
 
  @create: ->
    new Ctor

  getConstructor: ->
    Ctor
```
