# 路由

## 监听跳转
```javascript
window.addEventListener('popstate', () => {
    console.log('page turn');
})
```

## 刷新页面
```javascript
window.location.reload()
```

## 前进后退
```javascript
window.history.back()
window.history.forward()
```
