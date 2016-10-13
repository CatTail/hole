## Question

Following regular expression have the same affect

```js
/[.]/.test('.') // true
/[.]/.test('$') // false
```

```js
/[\.]/.test('.') // true
/[\.]/.test('$') // false
```

## Solution

> Any character except ^-]\ add that character to the possible matches for the character class.

Which means `.` don't require escape to be character `.`

## Referrences

* [escape dot in a regex range](http://stackoverflow.com/questions/10397968/escape-dot-in-a-regex-range)
* [regular express character class](http://www.regular-expressions.info/charclass.html)
* [regexper](https://regexper.com)
