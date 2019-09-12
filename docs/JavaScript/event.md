# 事件

## 撤销监听
```javascript
const handle = () => {
console.log('handle this')
window.removeEventListener('event', handle)
}
window.addEventListener('event', handle)
```