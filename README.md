# includes
An include helper function for searching normal arrays and arrays with objects

****Examples****
```javascript
includes('car', ['bike', 'train', 'car', 'bus']); // true
```

```javascript
includes('run', ['jump', 'walk', 'sprint']); // false
```
Comparing two arrays
```javascript
// This will test if all elements in the first array is in the second array
includes([7, 42], [88, 21 , 3, 7]); // false
includes([21, 7], [88, 21 , 3, 7]); // true
```
Comparing two arrays - options
```javascript
// This will test if at least one element from the first array is in the second array
includes([7, 42], [88, 21 , 3, 7], { all: false }); // true
```

Comparing array with objects - options
```javascript
var firstList = [{id:1}, {id:2}];
var secondList = [{id:1},{id:5}, {id:2}];
includes(firstList, secondList, { prop: 'id' }); // false
includes(firstList, secondList, { prop: 'id', all: false }); // true
```

```javascript
var obj = {id:1};
var list = [{id:1}, {id:2}];
includes(obj, list, { prop: 'id' }); // true
```
