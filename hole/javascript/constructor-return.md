## Question

Constructor don't return as expected

```js
function Test() {
    return 'hello world'
}
new Test() => Instance of `Test`
```

## Solution

The instance will be returned if the type of value returned from the constructor function is an not Object.

```js
function Test1() {
    return {hello: 'world'}
}
new Test1() => {hello: 'world'}

function Test2() {
    return function (){}
}
new Test2() => function (){}

function Test3() {
    return 123
}
new Test3() => Instance of `Test`
```

## Referrences

* [What values can a constructor return to avoid returning this?](http://stackoverflow.com/questions/1978049/what-values-can-a-constructor-return-to-avoid-returning-this)
