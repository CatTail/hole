/**
 * Platform cattail@cattop.cattail.me Linux3.11.5-1-ARCH@x86_64 GNU/Linux
 * Date 2013-10-23 12:19:43
 * @author zhongchiyu@gmail.com (cattail)
 * @description Instance property could be share accidently when using 
 * prototype based class inheritance.
 */

// If property is primitive value, it will be fine.
function Klass () {}
Klass.prototype.prop = 0;
Klass.prototype.setProp = function (value) {
  this.prop = value;
};
var obj1 = new Klass();
var obj2 = new Klass();
obj2.setProp(1);
console.log(obj1.prop === 0)
console.log(obj2.prop === 1);

////////////////////////////////////////
// Problem
////////////////////////////////////////

// Problem comes with non-primitive value
function $Set () {}
$Set.prototype.items = [];
$Set.prototype.add = function (item) {
  this.items.push(item);
};
var obj3 = new $Set();
var obj4 = new $Set();
obj4.add(1);
console.log(obj3.items.length === 1);
console.log(obj4.items.length === 1);

////////////////////////////////////////
// Solution
////////////////////////////////////////

// move property initialization into constructor
function Set () {
  this.items = [];
}
Set.prototype.add = function (item) {
  this.items.push(item);
};
var obj5 = new Set();
var obj6 = new Set();
obj6.add(1);
console.log(obj5.items.length === 0);
console.log(obj6.items.length === 1);

////////////////////////////////////////
// Reference
////////////////////////////////////////

// [coffeescript-class-member](http://stackoverflow.com/questions/8355371/coffeescript-class-members)
