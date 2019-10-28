# 字符串 String

## 轮询字符串
```javascript
/1/.test('123') 
// true
```

## 编码/解码
```javascript
encodeURL('嘻嘻嘻')
decodeURL('xixixi')
```

## 截取
```javascript
'12xxx'.substr(0,2) //12
```

## 全局替换
```javascript
'#123#'.replace(/#/g, '|') //|123|
```

## 去所有空格
```javascript
' 12 3 '.replace(/\s+/g,'') // '123'
```

## 去首尾空格
```JavaScript
' 123 '.trim() // '123'
```

## 执行字符串逻辑
```JavaScript
const xixi = '嘻嘻嘻'
const log = `console.log(${xixi})`
eval(log) // 嘻嘻嘻
```
## 逆序
```JavaScript
const stringReverse(string){
  let result =[]
  for(i in string) result.push(string[string.length-1-i])
  return result
}
```
