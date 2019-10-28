# 数字

## 保留位数

### 非四舍五入
```javascript
( parseInt( 0.12345 * 10000 ) / 10000 ).toFixed(4) // 0.1234
```
### 四舍五入
```javascript
0.12345.toFixed(4) // 0.1235
```

## 位数补齐
```javascript
'1'.padStart(3,'0') // 001
```

## 取整
### 向上
```javascript
Math.ceil(3.14) //4
```
### 向下
``` javascript
Math.floor(3.14) //3
```

## 千分符
``` javascript
const thSymbol(number)=>{
  let result =[]
  number = number.toString().reverse()
  number.forEach((l,i)=>{
    (i%3==0 && i!=0) && result.push(',')
    result.push(l)
  })
  return result.reverse().join('')
}
```
``` javascript
const thSymbol(number)=>{
    const rule = /\d{1,3}(?=(\d{3})+$)/g
    return number.toString().replace(rule, '$&,')
}
```
