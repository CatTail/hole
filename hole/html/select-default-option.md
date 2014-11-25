## Question

`selected` attribute don't select the default option.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<select>
</select>

<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script type="text/javascript" charset="utf-8">
$(function() {
  $('select').append($('<option value="0">0</option>'));
  $('select').append($('<option selected value="1">1</option>'));
});
</script>
</body>
</html>
```

## Solution

Following code select the default option `1`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<select>
    <option value="0">0</option>
    <option selected value="1">1</option>
</select>
</body>
</html>
```

Dynamically generated options don't select default option. Manually set `selectedIndex` property.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<select>
</select>

<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script type="text/javascript" charset="utf-8">
$(function() {
  $('select').append($('<option value="0">0</option>'));
  $('select').append($('<option selected value="1">1</option>'));
  $('select')[0].selectedIndex = 1;
});
</script>
</body>
</html>
```
