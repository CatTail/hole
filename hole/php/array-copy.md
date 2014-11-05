## Question

Change a value inside `foreach` don't have any effect,

```php
$data = array(
    'key' => array(
        'key1' => 'value1'
    )
);

foreach($data as $key => $obj) {
    $obj['key2'] = 'value2';
}

$data['key']['key2'] == 'value2'; // false
```

while

```php
$data = array(
    'key' => array(
        'key1' => 'value1'
    )
);

foreach($data as $key => $obj) {
    $data['key'] == $obj; // true
    $data['key']['key2'] = 'value2';
}

$data['key']['key2'] == 'value2'; true
```

## Solution

By default, PHP array assignment by value rather than reference

```php
$a = array('1', '2');
$b = $a;

$a[0] = '11';
echo $b[0]; // still '1'
```

And, array comparation also done by value comparation

```php
$a = array('1', '2');
$b = array('1', '2');

echo $a == $b; // true
```

We can using `&` to passing by reference,

```php
$a = array('1', '2');
$b = &$a;

$a[0] = '11';
echo $b[0]; // '11'
```

Comes with solution

```php
$data = array(
    'key' => array(
        'key1' => 'value1'
    )
);

foreach($data as $key => &$obj) {
    $obj['key2'] = 'value2';
}

$data['key']['key2'] == 'value2'; // true
```
