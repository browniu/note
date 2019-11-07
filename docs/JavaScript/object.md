# 对象 Object

## 合并对象
```javascript
Object.assign({name:'xixi',sex:'girl'},{age:18}) 
// {name:'xixi',sex:'girl',age:18}
```
## 遍历属性
```javascript
if(name in person){console.log(persion.name)}
```
## 对象转数组

### 键名
```javascript
Object.keys({a:'xixi',b:'haha'}) // ['a','b']
```

### 键值
```javascript
Object.values({a:'xixi',b:'haha'}) // ['xixi','haha']
```

## 深拷贝
```JavaScript
const copy = JSON.parse(JSON.stringify(obj));
```
```JavaScript
const deepClone = obj =>{
    let result = Array.isArray(obj)?[]:{}
    for(k in obj){
        if(typeof obj[k] ==== 'object' && obj[k] !== null) result[k] = deepClone(obj[k])
        else result[k] = obj[k]
    }
    return result
}
 ```
 
## 浅拷贝
```JavaScript
let b= {}
b=Object.assign(b,a)
```
```JavaScript
let b = {...a}
```

## 对象展开(浅拷贝)
```JavaScript
const obj1 = {
    name: 'xixi',
    aga: 1
};

const obj2 = {
    sex: 'boy',
    ...obj1
};
```

## 检测属性
```JavaScript
obj.hasOwnProperty(name)
```

## 定义只读不可枚举属性
Object.defineProperty(obj,id,{
    value:100,
    writbale:false,
    enumerable:false
})
