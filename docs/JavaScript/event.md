# 事件

## 撤销监听
```javascript
const handle = () => {
console.log('handle this')
window.removeEventListener('event', handle)
}
window.addEventListener('event', handle)
```

## 捕获执行
第三个参数`useCapture` 指定事件是否在捕获或冒泡阶段执行
```javascript
document.body.addEventListener('focus', (e) => {
  console.log(e.target)
}, true)
```
