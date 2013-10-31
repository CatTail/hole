/**
 * Platform cattail@cattop.cattail.me Linux3.11.6-1-ARCH@x86_64 GNU/Linux
 * Date 2013-10-31 11:17:04
 * @author zhongchiyu@gmail.com (cattail)
 * @description Native regular expression will fail when you run it with g 
 * option, because this will using lastIndex property.
 */

// ----------------------------------------------------------------------------
// Problem
// ----------------------------------------------------------------------------
// When set with `g` option, we have the problem.
var $zhReg = new RegExp('[\u4E00-\u9FA5\uF900-\uFA2D]', 'g');
$zhReg.test('test中'); // true
$zhReg.test('test中'); // false
$zhReg.test('test中'); // true
$zhReg.test('test中'); // false

// ----------------------------------------------------------------------------
// Solution
// ----------------------------------------------------------------------------

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


// ----------------------------------------------------------------------------
// Reference
// ----------------------------------------------------------------------------
// * [MDN RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Working_with_Regular_Expressions)
