# 方法

## 剩余参数
```JavaScript
func(a,b,...args){}
```

## Generator函数生成器
```JavaScript
function* show() {
    console.log('xixi')
    const a = yield '哈哈哈'
    console.log('haha', a)
}
console.log(show())
var sw = show()
console.log(show().next('嘻嘻嘻'))
```
