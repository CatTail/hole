### Question

Directly insert json encode string into element data attributes cause problem,
html invalid because double quote appears in data attributes.

```php
$data = array(
    'key' =>'"va"lue'
);
printf('<div data-source="%s"></div>', json_encode($data));
```

### Solution

Escape double quote before insert json string into element.

```php
$data = array(
    'key' =>'"va"lue'
);
printf('<div data-source="%s"></div>', htmlspecialchars(json_encode($data)));
```
