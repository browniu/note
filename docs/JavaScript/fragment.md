# 代码片段

## 元素查坐标
ISO 不支持`getBoundingClientRect` 方法
```javascript
coord(dom) {
    let rect = dom.getBoundingClientRect()
    if (this.isiOS) return [dom.offsetLeft + dom.clientWidth / 2, dom.offsetTop + dom.clientHeight / 2]
    return [rect.x + dom.clientWidth / 2, rect.y + dom.clientHeight / 2]
}
```

## 坐标查元素
```javascript
let posTo = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY).getAttribute('data-pos')
```

## 预加载
```javascript
preload() {
    return Promise.all(this.preloadQueue.map(async (e) => {
        return this.preloadCore(e)
    }))
}
preloadCore(src) {
    return new Promise(resolve => {
        const img = new Image()
        img.src = src
        img.onload = resolve
    })
}
```

## 截流
合并触发，周期响应

```javascript
let timer = 0
function throttle(callback, param) {
    let cur = Date.now()
    if (cur - pre > 500) {
        callback(param)
        pre = cur
    }
}
```

## 防抖
阻止触发，停止响应

```javascript
let timer 
function debounce(callback, param) {
    clearTimeout(timer)
    timer = setTimeout(() => callback(param), 500)
}
```
