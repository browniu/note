# 原生

## Symbol
唯一标识符
```JavaScript
const a = {
    [Symbol('xixi')]:{name:'嘻嘻嘻'},
    'haha':{name:'哈哈哈'},
    [Symbol('xixi')]:{name:'嘻嘻嘻'},
}
console.log(a)
```
## 运行时间监测
```JavaScript
console.time('test')
test()
console.tiemEnd('test')
```
