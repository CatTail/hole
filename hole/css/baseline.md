### Question

Container is a little bit taller than the content image.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css" media="all">
        div, img {
            border: 1px black solid;
        }
    </style>
</head>
<body>
    <div>
        <img src="https://www.google.com/images/srpr/logo11w.png" alt="Google">
    </div>
</body>
</html>
```

### Solution

I don't want pay too much time on CSS, but I know it's a proble related with `baseline`.

Following is the solution with `vertical-align`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <style type="text/css" media="all">
        div, img {
            border: 1px black solid;
        }
        img {
            vertical-align: top;
        }
    </style>
</head>
<body>
    <div>
        <img src="https://www.google.com/images/srpr/logo11w.png" alt="Google">
    </div>
</body>
</html>
```
