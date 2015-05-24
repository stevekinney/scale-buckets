# Scale Buckets

A little utility for sorting a range of values into little histogram-like bins.

So, let's say you have a range of 1024 values. (Maybe it's a potentiometer for some Nodebot you're working on.) Depending on the value, you want to get one of four elements from the range. If it's from 0-255, you want the first element. But, if the value is 1000, you want the fourth element.

If you've every felt this pain, then Scale Buckets if for you.

```js
const scaleBuckets = require('scale-buckets');

const scale = scaleBuckets(['a', 'b', 'c', 'd'], 1, 1024);

scale(200); // returns 'a'
scale(1000); // returns 'd'
```
