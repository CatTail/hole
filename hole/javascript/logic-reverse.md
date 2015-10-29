## Problem

`a && b` not always equals to `!(!a || !b)` in javascript

## Solution

For example, we can't reverse `config && config.field` to `!(!config || !config.field)`,
Because if `config` is `undefined`(which is the purpose of `config && config.field`),
`config.field` will throw exception
