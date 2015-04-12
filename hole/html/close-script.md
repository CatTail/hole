## Quesiton

Following code cause `Uncaught SyntaxError: Unexpected token ILLEGAL` error
rather than output `hello world`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <script type="text/javascript" charset="utf-8">
        document.write('<script>console.log("hello world")</script>');
    </script>
</body>
</html>
```

## Solution

Browser first parse html before execute script content in JavaScript engine.
Because in `</script>` appears in `document.write`, browser think it's the end
of script tag, we can avoid this in two ways,

### escape character with unicode

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <script type="text/javascript" charset="utf-8">
        document.write('<script>console.log("hello world")\u003C/script>');
    </script>
</body>
</html>
```

escape with html will not work,

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <script type="text/javascript" charset="utf-8">
        document.write('<script>console.log("hello world")&#60;/script>');
    </script>
</body>
</html>
```

which result in

```html
<html lang="en"><head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <script type="text/javascript" charset="utf-8">
        document.write('<script>console.log("hello world")&#60;/script>');
    </script><script>console.log("hello world")&#60;/script>
</body>
</html>
</script></body></html>
```

### concatenate

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <script type="text/javascript" charset="utf-8">
        var lt = '<';
        document.write('<script>console.log("hello world")' + lt + '/script>');
    </script>
</body>
</html>
```

## Credit

@zoubin https://github.com/zoubin
