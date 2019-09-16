# 滚动条

## 获取高度
```javascript
document.documentElement.scrollTop
```

## 监听事件
```javascript
window.onscroll=()=>{
  console.log(document.documentElement.scrollTop)
}
```

## 指定高度
```javascript
document.body.scrollTop(100)
```

## 判断是否存在
```javascript
hasScrollbar() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
}
```
