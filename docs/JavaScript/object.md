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

## 对象展开(深拷贝)
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
