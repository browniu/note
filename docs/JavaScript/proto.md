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

## 照妖镜
```JavaScript
Object.prototype.toString.call('xixi') // String
```

## 关于时间 

### 获取指定时间戳
```JavaScript
const time = new Date(2020,0,0,0,0,0).getTime()
```

### 时间差转天/时/分/秒
```JavaScript
// during=>时间差（秒）
const days = Math.floor(during /(60*60*24))
const hours = Math.floor(during % (60*60*24) / (60*60))
const minutes = Math.floor(during % (60*60*24) % (60*60) / 60)
const seconds = Math.floor(during % (60*60*24) % (60*60) % 60)
```
