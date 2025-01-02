```javascript
const pipeline = [
  {
    $match: {
      "metadata.version": {
        $exists: true
      }
    }
  },
  {
    $group: {
      _id: "$metadata.version",
      count: {
        $sum: 1
      }
    }
  }
];

const result = await collection.aggregate(pipeline).toArray();
console.log(result);
```