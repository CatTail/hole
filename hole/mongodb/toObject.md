## Question

使用[mongoose](http://mongoosejs.com/)当对获取到的对话进行一些操作后, 使用在客户
端接受到的JSON对象没有反映这些修改.

```js
mongoose.model('Cat').find({ type: 'GM' }).exec(function(err, cars) {
  res.json(cars.map(function(car) {
    car.price = 0;
    return car;
  }));
});
```

## Solution

因为mongoose返回的对象不是简单对象, 而是进行了封装, 通过toObject可以获得原对象

```js
mongoose.model('Cat').find({ type: 'GM' }).exec(function(err, cars) {
  res.json(cars.map(function(car) {
    car = car.toObject();
    car.price = 0;
    return car;
  }));
});
```
