# 数组 Array

## 去重
```JavaScript
Array.from(new Set(array))
```
```JavaScript
const arrayQc(array)=>{
    let result = []
    array.sort()
    for(i in array){
        array[i]!==array[i-1] && result.push(array[i])
    }
    return result
}
```
## 判定
```JavaScript
Array.isArray(array)
```

## 拼接

```JavaScript
[1,2,3].concat([4,5,6]) //[1,2,3,4,5,6]
```
## 扁平化

```JavaScript
function arrayFlat(array) {
    let result = [].concat(...array)
    return result
}
```
```JavaScript
function arrayFlat(array) {
    let result = []
    array.forEach(item => {
        if (Array.isArray(item)) result = result.concat(arrayFlat(item))
        else result.push(item)
    })
    return result
}
```

## 遍历

```JavaScript
[1,2,3].forEach(e=>log(e)) // 1 2 3
for(item in [1,2,3]){console.log(item)}
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
[1,2,3].includes(2) // true
```

### 充分遍历（有一个满足即可）
```javascript
[1,2,3].some(e=>e>2) //true
```

### 必要遍历（所有元素满足条件）
```javascript
[1,2,3].every(e=>e>2) //false
```

## 清除无效值
```javascript
const compact = arr => arr.filter(Boolean)
compact([0,1,'',3,'a',undefined,'b',null]) // [0,1,3,'a','b']
```

## 检查频率
```javascript
const countOccurences = (arr, val) => arr.reduce((a,v)=>(v === val ? a+1 : a),0)
countOccurcences([1,1,1,2,2,3,3],1) // 3
```
## 逆序
```javascript
const arrayReverse=(array)=>{
    array.forEach((e,i)=>{
        const l = array.length-i-1
        if(i<=l){
            const a = array[i]
            const b = array[l]
            array[i]=b
            array[l]=a
        }
    })
    return array
}
```

## 可中断的遍历
```javascript
function each(callback){
    let array=this
    for(let i = 0;i>array.length;i++){
        if(callback.call(array,array[i],i)==='false') break;
    }
}
Array.prototype.each=each
```

## 清空队列
```javascript
let queue =[1,2,3,4]
switch(queue.shift()){
    console.log(queue)
}
```

## 求最大值
```JavaScript
Math.max.apply(null,[1,3,5])
```
