### 问题描述

在正则表达式中设置`g`选项需要警惕`lastIndex`属性, 它可能使得检索失败

```js
// When set with `g` option, we have the problem.
var $zhReg = new RegExp('[\u4E00-\u9FA5\uF900-\uFA2D]', 'g');
$zhReg.test('test中'); // true
$zhReg.test('test中'); // false
$zhReg.test('test中'); // true
$zhReg.test('test中'); // false
```

### 解决方案

```js
// reset lastIndex property
var zhReg1 = new RegExp('[\u4E00-\u9FA5\uF900-\uFA2D]', 'g');
zhReg1.test('test中'); // true
zhReg1.lastIndex = 0;
zhReg1.test('test中'); // true
zhReg1.lastIndex = 0;
zhReg1.test('test中'); // true

// only use `g` when necessary
var zhReg2 = new RegExp('[\u4E00-\u9FA5\uF900-\uFA2D]');
zhReg2.test('test中'); // true
zhReg2.test('test中'); // true
```


### 相关参考

  * [MDN RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Working_with_Regular_Expressions)
