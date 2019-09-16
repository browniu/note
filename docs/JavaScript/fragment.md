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
阻止触发，周期内响应一次

```javascript
function throttle(func, wait) {
    let previous = 0;
    return function () {
        const now = Date.now();
        const context = this;
        const args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now
        }
    }
}
```

## 防抖
阻止触发，停止触发后延迟响应
```javascript
function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this
        const args = arguments
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => func.apply(context, args), wait)
    }
}
```
