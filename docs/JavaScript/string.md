# 字符串

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