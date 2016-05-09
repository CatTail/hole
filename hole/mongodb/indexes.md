## Question

新创建的`document`使用索引会出现错误*不存在索引*

以下是使用mongoose完成的操作

```js
var BookSchema = new Schema({ location: { type: [Number], index: '2d' } });
var BookModel = mongoose.model('Event', Bookschema);

BookModel.create({ location: [0, 0] });
BookModel.find({ location: { '$near': [1, 1] } });
```

## Solution

在执行CUD操作后, 在执行查询操作前, 需要保证索引已经被创建

```js
var BookSchema = new Schema({ location: { type: [Number], index: '2d' } });
var BookModel = mongoose.model('Event', Bookschema);

BookModel.create({ location: [0, 0] });
BookModel.ensureIndexes(function(err) {
  BookModel.find({ location: { '$near': [1, 1] } });
});
```
