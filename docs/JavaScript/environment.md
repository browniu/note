# 环境变量

## 移动端
```javascript
this.isMobile = () => /Android|webOS|iPhone|iPod|BlackBerry|iPad/i.test(navigator.userAgent)
```

## 微信
```javascript
this.isWx = () => /MicroMessenger/i.test(navigator.userAgent)
```

## IOS
```javascript
this.isiOS = () => /iPhone|iPod|iPad/i.test(navigator.userAgent)
```
