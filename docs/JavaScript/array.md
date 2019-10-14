# 数组 Array

## 拼接

```JavaScript
[1,2,3].concat([4,5,6]) //[1,2,3,4,5,6]
```

## 遍历

```JavaScript
[1,2,3].forEach(e=>log(e)) // 1 2 3
```

## 数组转字符串
```javascript
[1,2,3].join('/') // 1/2/3
```

## 生成
```javascript
Array.apply(null,{length:3}) // [undefined,undefined,undefined]
```

## 异步遍历
```javascript
await Promise.all(array.map(async(e)=>console.log(e)))
```

## 计算
```javascript
eval([1,2,3].join('+')) //6
```

## 翻转
```javascript
[1,2,3].reserve() //[3,2,1]
```

## 去重
```javascript
new Set([1,2,3,1,4,1]) //[1,2,3,4]
```

## 查询
```javascript
[1,2,3].indexOf(2) //1
```
